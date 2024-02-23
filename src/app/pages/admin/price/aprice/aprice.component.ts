import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {StateManagerService} from "../../../../services/state-manager.service";
import {UtilService} from "../../../../services/util.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aprice',
  templateUrl: './aprice.component.html',
  styleUrls: ['./aprice.component.css']
})
export class ApriceComponent {
  sideNavItems = ['Dashboard', ' Categorie', 'Price', 'Customers ', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9', 'Button 10'];

  // toggleSidenav() {
  //   // You can add logic here to toggle the sidenav if needed
  // }
  @Output() toggleSideNavEvent: EventEmitter<any> = new EventEmitter();

  opened = true;

  constructor(private authService: AuthService,
              private stateManagerService: StateManagerService,
              private util: UtilService,
              private fb: FormBuilder,
              private router: Router) {}

  toggleSideNav() {
    this.opened = !this.opened;
    this.toggleSideNavEvent.emit();
  }
  logOut(): void {
    // Clear the current user session
    this.stateManagerService.clearCurrentUser();
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
