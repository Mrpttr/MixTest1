import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../shared/dataservice.service';
import { mfdata } from '../../model/masterdata.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  allmfd: mfdata[];
  constructor(private mfdService: DataserviceService) { }

  ngOnInit() {
    this.getmfdata();
  }

  getmfdata(){
    this.mfdService.getmfdata().subscribe(
      (data: mfdata[]) => {
        this.allmfd = data;
      });
  }

  deletemfd(id:number){
    this.mfdService.deletemfd(id).subscribe(
      (data: mfdata) => {
        this.getmfdata();
      });
    }

  edit(mfd){
    this.mfdService.currentmfdata = Object.assign({},mfd)
  }

  
}
