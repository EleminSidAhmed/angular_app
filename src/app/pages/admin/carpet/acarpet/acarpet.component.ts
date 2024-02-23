import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {StateManagerService} from "../../../../services/state-manager.service";
import {UtilService} from "../../../../services/util.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acarpet',
  templateUrl: './acarpet.component.html',
  styleUrls: ['./acarpet.component.css']
})
export class AcarpetComponent {
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
