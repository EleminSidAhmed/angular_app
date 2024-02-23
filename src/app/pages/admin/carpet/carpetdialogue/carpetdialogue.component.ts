import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudserviceService} from "../../../services/crudservice.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-carpetdialogue',
  templateUrl: './carpetdialogue.component.html',
  styleUrls: ['./carpetdialogue.component.css']
})
export class CarpetdialogueComponent implements OnInit{
  carpetForm !: FormGroup;
  actionBtn: String="save";
  constructor(private formbuilder:FormBuilder ,
              private crud:CrudserviceService,
              @Inject(MAT_DIALOG_DATA) public editData :any,
              private dialogRef :MatDialogRef<CarpetdialogueComponent>,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.carpetForm=this.formbuilder.group({
        lib:['',Validators.required],
        carpetsize:['',Validators.required],
        price:['',Validators.required]
      }
    );
    if (this.editData){
      this.actionBtn="update";
      this.carpetForm.controls['lib'].setValue(this.editData.lib);
      this.carpetForm.controls['carpetsize'].setValue(this.editData.carpetsize);
      this.carpetForm.controls['price'].setValue(this.editData.price);
    }
  }

  addcarpet() {
    if(!this.editData){
      if(this.carpetForm.valid){
        this.crud.addcarpet(this.carpetForm.value).subscribe({
          next:(res)=>{
            this.toastr.success("carpet added successfully");
            this.carpetForm.reset();
            this.dialogRef.close("save");
          },
          error:()=>{
            this.toastr.error("error while adding type");
          }
        })
      }
    }
    else{
      this.updatecarpet();
    }
  }
  updatecarpet(){
    this.crud.putcarpet(this.carpetForm.value,this.editData.id).subscribe({
      next:(res)=>{
        this.toastr.success("carpet updated successefuly")
        this.carpetForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        this.toastr.error("Error while updating");
      }
    })
  }

}
