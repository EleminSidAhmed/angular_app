import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {StateManagerService} from "../../../services/state-manager.service";
import {UtilService} from "../../../services/util.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudserviceService} from "../../services/crudservice.service";

@Component({
  selector: 'app-ucarpet',
  templateUrl: './ucarpet.component.html',
  styleUrls: ['./ucarpet.component.css']
})
export class UcarpetComponent {
  constructor(private authService: AuthService,
              private stateManagerService: StateManagerService,
              private util: UtilService,
              private fb: FormBuilder,
              private router: Router,private crud:CrudserviceService) {
  }
  nom:string=this.stateManagerService.currentUserValue.nom
  logOut(): void {
    // Clear the current user session
    this.stateManagerService.clearCurrentUser();
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

}
