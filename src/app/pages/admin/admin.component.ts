import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {AuthService} from "../services/auth.service";
import {StateManagerService} from "../../services/state-manager.service";
import {UtilService} from "../../services/util.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {CrudserviceService} from "../services/crudservice.service";
import {catchError, map, of} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  @Output() toggleSideNavEvent: EventEmitter<any> = new EventEmitter();

  opened = true;
  totalCount: number = 0;

  constructor(private authService: AuthService,
              private stateManagerService: StateManagerService,
              private util: UtilService,
              private fb: FormBuilder,
              private router: Router,private crud:CrudserviceService) {}
  ngOnInit(): void {
    this.getCount();
  }
  countAll(){
    return this.crud.gettype().pipe(
      map((res: any[]) => {
        return res.length;
      }),
      catchError(() => {
        return of(0);
      })
    );
  }
  getCount(): void {
    this.countAll().subscribe(count => {
      this.totalCount = count;
    });
  }

  toggleSideNav() {
    this.opened = !this.opened;
    this.toggleSideNavEvent.emit();
  }
//   let menuicn = document.querySelector(".menuicn");
//   let nav = document.querySelector(".navcontainer");
//
//   menuicn.addEventListener("click", () => {
//   nav.classList.toggle("navclose");
// })

  sideNavItems = ['Dashboard', ' Categorie', 'Price', 'Customers ', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9', 'Button 10'];

  // toggleSidenav() {
  //   // You can add logic here to toggle the sidenav if needed
  // }

  protected readonly DialogComponent = DialogComponent;

  logOut(): void {
    // Clear the current user session
    this.stateManagerService.clearCurrentUser();
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}


