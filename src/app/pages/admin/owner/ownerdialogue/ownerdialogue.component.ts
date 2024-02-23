import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudserviceService} from "../../../services/crudservice.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ownerdialogue',
  templateUrl: './ownerdialogue.component.html',
  styleUrls: ['./ownerdialogue.component.css']
})
export class OwnerdialogueComponent implements OnInit{
  ownerForm !: FormGroup;
  actionBtn: String="save";
  constructor(private formbuilder:FormBuilder ,
              private crud:CrudserviceService,
              @Inject(MAT_DIALOG_DATA) public editData :any,
              private dialogRef :MatDialogRef<OwnerdialogueComponent>,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.ownerForm=this.formbuilder.group({
        idPrix:['',Validators.required],
        quantity:['',Validators.required],
        idUser:['',Validators.required],
      }
    );
    if (this.editData){
      this.actionBtn="update";
      this.ownerForm.controls['idPrix'].setValue(this.editData.idPrix);
      this.ownerForm.controls['quantity'].setValue(this.editData.quantity);
      this.ownerForm.controls['idUser'].setValue(this.editData.idUser);
    }
  }

  addowner() {
    if(!this.editData){
      if(this.ownerForm.valid){
        this.crud.addowner(this.ownerForm.value).subscribe({
          next:(res)=>{
            this.toastr.success("owner added successfully");
            this.ownerForm.reset();
            this.dialogRef.close("save");
          },
          error:()=>{
            this.toastr.error("error while adding owner");
          }
        })
      }
    }
    else{
      this.updatowner();
    }
  }
  updatowner(){
    this.crud.putowner(this.ownerForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("owner updated successefuly")
        this.ownerForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        alert("Error while updating");
      }
    })
  }

}
