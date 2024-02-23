import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateManagerService} from "../../services/state-manager.service";
import {Iauth} from "../models/iauth";
import {Observable} from "rxjs";
import {Iuser} from "../models/iuser";
import {Type} from "../models/type";
import {Ireg} from "../models/ireg";
@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient,
              private stateManagerService: StateManagerService) { }

  logIn(auth: Iauth) {
    return this.httpClient.post("http://localhost:8080/Auth/loginrole", auth);
  }
  findbyid(id: number) {
    return this.httpClient.get<any>("http://localhost:8080/User/findbyuser/"+id);
  }
  addcommand(data:any){
    return this.httpClient.post("http://localhost:8080/User/command/create", data);
  }
  logOut() {
    // @ts-ignore
    this.stateManagerService.curUser = null;
  }
  register(ireg: Ireg) {
    return this.httpClient.post("http://localhost:8080/User/create", ireg);
  }
  save(type:Type){
    return this.httpClient.post("http://localhost:8080/User/type",type);

  }
}
