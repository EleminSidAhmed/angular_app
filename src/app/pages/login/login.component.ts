import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {User} from "../../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor() {
  }

  ngOnInit(): void {
  }
  userlogin(){
    console.log(this.user)
  }

}
