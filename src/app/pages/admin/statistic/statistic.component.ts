import {Component, OnInit} from '@angular/core';
import {catchError, map, of} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {StateManagerService} from "../../../services/state-manager.service";
import {UtilService} from "../../../services/util.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudserviceService} from "../../services/crudservice.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit{
  totalCount: number = 0;
  countPrice: number = 0;
  countCarpet: number = 0;
  countWorkers: number = 0;

  constructor(private authService: AuthService,
              private util: UtilService,
              private router: Router,private crud:CrudserviceService,
              private stateManagerService: StateManagerService) {}
  ngOnInit(): void {
    this.getCount();
    this.getPrice();
    this.getCarpet();
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




  priceCount(){
    return this.crud.getprice().pipe(
      map((res: any[]) => {
        return res.length;
      }),
      catchError(() => {
        return of(0);
      })
    );
  }
  getPrice(): void {
    this.priceCount().subscribe(count => {
      this.countPrice = count;
    });
  }
  carpetCount(){
    return this.crud.getcarpet().pipe(
      map((res: any[]) => {
        return res.length;
      }),
      catchError(() => {
        return of(0);
      })
    );
  }
  getCarpet(): void {
    this.carpetCount().subscribe(count => {
      this.countPrice = count;
    });
  }

  logOut(): void {
    // Clear the current user session
    this.stateManagerService.clearCurrentUser();
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
