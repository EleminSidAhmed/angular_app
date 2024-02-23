import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iauth} from "../models/iauth";
import {StateManagerService} from "../../services/state-manager.service";
import {AuthService} from "../services/auth.service";
import {Iuser} from "../models/iuser";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public loginForm: FormGroup | any;

   auth:Iauth = {userName: "", password: ""};
   isLoginFailed = false;
  constructor(private authService: AuthService,
              private stateManagerService: StateManagerService
              ,public util: UtilService,private fb: FormBuilder) {
  }
  logiIn() {

    // @ts-ignore
    this.authService.logIn(this.auth).subscribe((user: Iuser | null) => {
      if (user && user.role=='admin') {
        this.stateManagerService.setCurrentUser(user);
        this.util.navigateTo('/admin');
      }
      else if (user && user.role!='admin'){
        this.stateManagerService.setCurrentUser(user);
        this.util.navigateTo('/userhome');
      }
        else {
        this.isLoginFailed = true;
      }
    });
  }


}
