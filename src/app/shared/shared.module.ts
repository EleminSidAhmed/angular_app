import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MsgSuccessComponent} from "../components/msg-success/msg-success.component";
import {MsgDangerComponent} from "../components/msg-danger/msg-danger.component";
import {MaterialDepsModule} from "../deps/material-deps/material-deps.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MsgSuccessComponent,
    MsgDangerComponent,
    MaterialDepsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    MsgSuccessComponent,
    MsgDangerComponent,
    MaterialDepsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
