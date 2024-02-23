import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
// import {RegisterComponent} from "./register/register.component";
import {AdminComponent} from "./admin/admin.component";
import {UserhomeComponent} from "./userhome/userhome.component";
import {UserMustBeLoggedInGuard} from "../services/user-must-be-logged-in-guard";
import {ApriceComponent} from "./admin/price/aprice/aprice.component";
import {AownerComponent} from "./admin/owner/aowner/aowner.component";
import {RegisterComponent} from "./register/register.component";
import {AcarpetComponent} from "./admin/carpet/acarpet/acarpet.component";
import {OurservComponent} from "./ourserv/ourserv.component";
import {StatisticComponent} from "./admin/statistic/statistic.component";
import {DialogComponent} from "./admin/dialog/dialog.component";
import {ProfileComponent} from "./profile/profile.component";
import {UcarpetComponent} from "./userhome/ucarpet/ucarpet.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'userhome',
    component: UserhomeComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'price',
    component: ApriceComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'owner',
    component: AownerComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'service',
    component: OurservComponent,
  },
  {
    path: 'ucarpet',
    component: UcarpetComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'carpet',
    component: AcarpetComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
