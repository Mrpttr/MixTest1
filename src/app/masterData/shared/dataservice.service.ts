import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mfdata } from '../model/masterdata.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class DataserviceService {

  currentmfdata: mfdata = {
    id:null,
    pro_id:'',
    pla_id:'',
    r_id:'',
    f_id:'',
    s_id:'',
    q_id:'',
    fi_id:''
  }

  constructor(private http:HttpClient) { }

  mockurl = "http://localhost:3000/Mfdata";

  getmfdata():Observable<mfdata[]>{
    return this.http.get<mfdata[]>(this.mockurl,headerOption);
  }

  deletemfd(id:number):Observable<mfdata>{
    return this.http.delete<mfdata>(this.mockurl + '/' + id, headerOption);
  }

  savemfd(mfd: mfdata):Observable<mfdata>{
    return this.http.put<mfdata>(this.mockurl + '/' + mfd.id, mfd, headerOption);
  }

}
