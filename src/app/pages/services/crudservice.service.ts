import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateManagerService} from "../../services/state-manager.service";
import {FormBuilder} from "@angular/forms";
import {map, Observable} from "rxjs";

@Injectable(
  {
    providedIn:'root'
  }
)
export class CrudserviceService {

  constructor(private httpClient: HttpClient) {
  }
  addtype(data:any){
    return this.httpClient.post("http://localhost:8080/Admin/type/create", data);
  }
  gettype(){
    return this.httpClient.get<any>("http://localhost:8080/Admin/type");
  }
  puttype(data:any,id:number){
    return this.httpClient.put("http://localhost:8080/Admin/type/update/"+id,data)

  }
  deletetype(id:number){
   return this.httpClient.delete("http://localhost:8080/Admin/type/delete/"+id);
  }
/* price starts*/
  addprice(data:any){
    return this.httpClient.post("http://localhost:8080/Admin/price/create", data);
  }
  getprice(){
    return this.httpClient.get<any>("http://localhost:8080/Admin/price");
  }
  putprice(data:any,id:number){
    return this.httpClient.put("http://localhost:8080/Admin/price/update/"+id,data)

  }
  getPriceLib(): Observable<string> {
    return this.getprice().pipe(
      map(response => response.lib)
    );
  }
  deleteprice(id:number){
    return this.httpClient.delete("http://localhost:8080/Admin/price/delete/"+id);
  }

  /* price Ends*/
  /* Owner Starts*/
  addowner(data:any){
    return this.httpClient.post("http://localhost:8080/Admin/owner/create", data);
  }
  getowner(){
    return this.httpClient.get<any>("http://localhost:8080/Admin/owner");
  }
  putowner(data:any,id:number){
    return this.httpClient.put("http://localhost:8080/Admin/owner/update/"+id,data)

  }
  deleteowner(id:number){
    return this.httpClient.delete("http://localhost:8080/Admin/owner/delete/"+id);
  }
  getownerbyid(id:number){
    return this.httpClient.get("http://localhost:8080/Admin/owner/details/"+id);
  }
  /* Owner Ends*/

  /* Carpets Starts*/
  addcarpet(data:any){
    return this.httpClient.post("http://localhost:8080/Admin/carpet/create", data);
  }
  getcarpet(){
    return this.httpClient.get<any>("http://localhost:8080/Admin/carpet");
  }
  putcarpet(data:any,id:number){
    return this.httpClient.put("http://localhost:8080/Admin/carpet/update/"+id,data)

  }
  deletecarpet(id:number){
    return this.httpClient.delete("http://localhost:8080/Admin/carpet/delete/"+id);
  }
  getcarpetbyid(id:number){
    return this.httpClient.get("http://localhost:8080/Admin/carpet/details/"+id);
  }
  /* Carpets Ends*/
}
