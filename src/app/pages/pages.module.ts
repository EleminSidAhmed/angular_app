import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule
    ]
})
export class PagesModule { }
