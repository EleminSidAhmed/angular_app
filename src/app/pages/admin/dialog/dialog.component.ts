import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudserviceService} from "../../services/crudservice.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  typeForm !: FormGroup;
  actionBtn: String="save";
  constructor(private formbuilder:FormBuilder ,
              private crud:CrudserviceService,
              @Inject(MAT_DIALOG_DATA) public editData :any,
              private dialogRef :MatDialogRef<DialogComponent>,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.typeForm=this.formbuilder.group({
      type:['',Validators.required]
      }
    );
    if (this.editData){
      this.actionBtn="update";
      this.typeForm.controls['type'].setValue(this.editData.type);
    }
  }

  addtype() {
   if(!this.editData){
     if(this.typeForm.valid){
       this.crud.addtype(this.typeForm.value).subscribe({
         next:(res)=>{
           this.toastr.success("type added successfully","",{
           });
           this.typeForm.reset();
           this.dialogRef.close("save");
         },
         error:()=>{
           this.toastr.error("error while adding type","",{

           });
         }
       })
     }
   }
  else{
    this.updatetype();
   }
  }
  updatetype(){
   this.crud.puttype(this.typeForm.value,this.editData.id).subscribe({
     next:(res)=>{
       this.toastr.success("type updated successfully","",{
       });
       this.typeForm.reset();
       this.dialogRef.close("update");
     },
     error:()=>{
       this.toastr.error("error while updating","",{

       });
     }
   })
  }
}
