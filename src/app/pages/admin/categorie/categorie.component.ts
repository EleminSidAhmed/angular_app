import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../services/crudservice.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  displayedColumns: string[] = ['id','type','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,private crud:CrudserviceService,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.getAll()
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'30%'
    }).afterClosed().subscribe(value => {
      if (value=='save'){
        this.getAll();
      }
    });

  }
  getAll(){
    this.crud.gettype().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource<any>(res)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },
      error:()=>{
        this.toastr.info("no data have been initialized","",{
        });
      }
    })

  }
  edittype(row :any){
  this.dialog.open(DialogComponent,{
    width:'30%',
    data:row

  }).afterClosed().subscribe(value => {
    if (value=='update'){
      this.getAll();
    }
  });
  }
  deletetype(id:number){
    this.crud.deletetype(id).subscribe({
      next:(res)=>{
        this.toastr.success("type deleted successfully","",{
        });

        this.getAll();
      },
      error:()=>{
        this.toastr.info("Error while Deleting the type","",{
        });
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

}

}
