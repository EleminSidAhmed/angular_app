import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import {StateManagerService} from "./state-manager.service";
import {Iuser} from "../pages/models/iuser";
// @ts-ignore
import Promise from "$GLOBAL$";
@Injectable({
  providedIn: 'root'
})
export class UserMustBeLoggedInGuard implements CanActivate {

  constructor(private router: Router, private stateManagerService: StateManagerService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.stateManagerService.currentUser.pipe(
      map(user => {
        if (user && user.nom) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['login']);
        return of(false);
      })
    );
  }
}
