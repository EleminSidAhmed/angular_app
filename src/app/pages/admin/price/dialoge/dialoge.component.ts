import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudserviceService} from "../../../services/crudservice.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dialoge',
  templateUrl: './dialoge.component.html',
  styleUrls: ['./dialoge.component.css']
})
export class DialogeComponent  implements OnInit{
  priceForm !: FormGroup;
  actionBtn: String="save";
  constructor(private formbuilder:FormBuilder ,
              private crud:CrudserviceService,
              @Inject(MAT_DIALOG_DATA) public editData :any,
              private dialogRef :MatDialogRef<DialogeComponent>,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.priceForm=this.formbuilder.group({
        lib:['',Validators.required],
        idType:['',Validators.required],
        prix:['',Validators.required],
      }
    );
    if (this.editData){
      this.actionBtn="update";
      this.priceForm.controls['lib'].setValue(this.editData.lib);
      this.priceForm.controls['idType'].setValue(this.editData.idType);
      this.priceForm.controls['prix'].setValue(this.editData.prix);
    }
  }

  addprice() {
    if(!this.editData){
      if(this.priceForm.valid){
        this.crud.addprice(this.priceForm.value).subscribe({
          next:(res)=>{
            this.toastr.success("price added successfully");
            this.priceForm.reset();
            this.dialogRef.close("save");
          },
          error:()=>{
            this.toastr.error("error while adding price");
          }
        })
      }
    }
    else{
      this.updateprice();
    }
  }
  updateprice(){
    this.crud.putprice(this.priceForm.value,this.editData.id).subscribe({
      next:(res)=>{
        this.toastr.success("price updated successefuly")
        this.priceForm.reset();
        this.dialogRef.close("update");
      },
      error:()=>{
        this.toastr.error("Error while updating");
      }
    })
  }

}
