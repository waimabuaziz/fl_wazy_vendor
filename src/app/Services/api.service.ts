import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://80.209.226.217:8080/manhaji/backend/public/api/auth' ;


  constructor(private http:HttpClient) { }



    productSubmit(data:any){
      return  this.http.post(`${this.baseUrl}/apitest`, data )
    }

    productRetrive(data:any){
      return  this.http.post(`${this.baseUrl}/apitest_retrive2`, data )
    }


    productDelete(data:any){
      return  this.http.post(`${this.baseUrl}/apitest_delete`, data )
    }




}
