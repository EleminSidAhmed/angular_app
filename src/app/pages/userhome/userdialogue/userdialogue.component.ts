import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudserviceService} from "../../services/crudservice.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StateManagerService} from "../../../services/state-manager.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-userdialogue',
  templateUrl: './userdialogue.component.html',
  styleUrls: ['./userdialogue.component.css']
})
export class UserdialogueComponent implements OnInit{
  userForm !: FormGroup;
  actionBtn: String="save";
  // In your component
  type: string ='';
  livraison: string='';
  options: string[] = ['with ', 'without',];
  libList: string[] = ['Clothes','Carpet','Worker'];

  constructor(private formbuilder:FormBuilder ,
              private crud:CrudserviceService,
              @Inject(MAT_DIALOG_DATA) public editData :any,
              private dialogRef :MatDialogRef<UserdialogueComponent>,private state: StateManagerService,private toastr:ToastrService,private authservice:AuthService) {
  }
 id :number=this.state.currentUserValue.id;
  ngOnInit(): void {
    this.id;
    this.userForm=this.formbuilder.group({
      nbrPiece:['',Validators.required],
      idUser:[this.id,Validators.required],
      // type:['',Validators.required],
      // livraison:['',Validators.required],
      }
    );
    if (this.editData){
      // this.actionBtn="update";
      // this.userForm.controls['idUser'].setValue(this.editData.idUser);
      // this.userForm.controls['nbrPiece'].setValue(this.editData.nbrPiece);
      // this.userForm.controls['idUser'].setValue(this.editData.idUser);
    }
    this.getLib();
  }

  addcommand() {
    if(!this.editData){
        this.authservice.addcommand(this.userForm.value).subscribe({
          next:(res)=>{
            this.toastr.success("command sent");
            //this.userForm.reset();
            this.dialogRef.close("save");
          },
          error:()=>{
            this.toastr.error("error while sending command");
          }
        })

    }
    else{
      this.toastr.info("Update later");
    }
  }
  updatuser(){
    this.crud.putowner(this.userForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("owner updated successefuly")
        this.userForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        alert("Error while updating");
      }
    })
  }

  getLib(): void {
    this.crud.getPriceLib().subscribe(
      lib => {
        this.libList.push(lib); }
    );
  }
}
