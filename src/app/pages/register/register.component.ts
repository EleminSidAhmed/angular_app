import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilService} from "../../services/util.service";
import {Iauth} from "../models/iauth";
import {Ireg} from "../models/ireg";
import {Ipass} from "../models/ipass";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup | any;
  reg:Ireg = {nom: "", password: "",email:""};
  pass:Ipass = {confirme: "",};
  isLoginFailed = false;
  constructor(public util: UtilService,private fb: FormBuilder,private authService: AuthService,private toastr:ToastrService,private utile:UtilService) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]})
    , { validator: this.passwordMathValidator }}


  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  register(){
    if (this.reg.password==this.pass.confirme){
    this.authService.register(this.reg).subscribe({
      next:(res)=>{
        this.toastr.success("your account have been created","",{
        });
        this.util.navigateTo("login");
      },
      error:()=> {
        this.toastr.error("error while creating account", "", {});

      }});}
    else {
      this.toastr.error("the passwords are not the same")
    }
  }

}
