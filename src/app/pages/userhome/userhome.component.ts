import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../services/crudservice.service";
import {OwnerdialogueComponent} from "../admin/owner/ownerdialogue/ownerdialogue.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserdialogueComponent} from "./userdialogue/userdialogue.component";
import {AuthService} from "../services/auth.service";
import {StateManagerService} from "../../services/state-manager.service";
import {UtilService} from "../../services/util.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent{
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
