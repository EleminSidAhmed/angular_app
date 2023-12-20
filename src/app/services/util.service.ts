import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private router: Router) {}

  getSumArrByKey(array: any[], key: string) {
    return array.reduce((cnt, curVal) => cnt + curVal[key], 0);
  }

  navigateTo(url: string, param?:any) {
    if (!param) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate([url, param]);
    }
  }
}
