import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
 import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {AuthService} from "./services/auth.service";
import {SharedModule} from "../shared/shared.module";
import { UserhomeComponent } from './userhome/userhome.component';
import { NavBarComponent } from './userhome/nav-bar/nav-bar.component';
import { SideBarComponent } from './userhome/side-bar/side-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { DialogComponent } from './admin/dialog/dialog.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { CategorieComponent } from './admin/categorie/categorie.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { DialogeComponent } from './admin/price/dialoge/dialoge.component';
import { PriceComponent } from './admin/price/price/price.component';
import { ApriceComponent } from './admin/price/aprice/aprice.component';
import { OwnerdialogueComponent } from './admin/owner/ownerdialogue/ownerdialogue.component';
import { AownerComponent } from './admin/owner/aowner/aowner.component';
import { OwnerComponent } from './admin/owner/owner/owner.component';
import { DetailsdialogueComponent } from './admin/owner/detailsdialogue/detailsdialogue.component';
import { CarpetdialogueComponent } from './admin/carpet/carpetdialogue/carpetdialogue.component';
import { AcarpetComponent } from './admin/carpet/acarpet/acarpet.component';
import { CarpetComponent } from './admin/carpet/carpet/carpet.component';
import { UserdialogueComponent } from './userhome/userdialogue/userdialogue.component';
import { OurservComponent } from './ourserv/ourserv.component';
import {MatMenuModule} from "@angular/material/menu";
import { StatisticComponent } from './admin/statistic/statistic.component';
import { ProfileComponent } from './profile/profile.component';
import { UcarpetComponent } from './userhome/ucarpet/ucarpet.component';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    UserhomeComponent,
    NavBarComponent,
    SideBarComponent,
    DialogComponent,
    CategorieComponent,
    DialogeComponent,
    PriceComponent,
    ApriceComponent,
    OwnerdialogueComponent,
    AownerComponent,
    OwnerComponent,
    DetailsdialogueComponent,
    CarpetdialogueComponent,
    AcarpetComponent,
    CarpetComponent,
    UserdialogueComponent,
    OurservComponent,
    StatisticComponent,
    ProfileComponent,
    UcarpetComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    AdminComponent,
    MatIconModule
  ],
  providers: [
    AuthService
  ]
})
export class PagesModule { }
