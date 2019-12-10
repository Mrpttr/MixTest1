import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../shared/dataservice.service';
import { mfdata } from '../../model/masterdata.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private mfdService: DataserviceService) { }

  ngOnInit() {
  }

  save(currentmfdata: mfdata){ 
    console.log(currentmfdata);
    this.saveMfd(currentmfdata);
  }

  saveMfd(mfd: mfdata){
    this.mfdService.savemfd(mfd).subscribe();
  }

}
