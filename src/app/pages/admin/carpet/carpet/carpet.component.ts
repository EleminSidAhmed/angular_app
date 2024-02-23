import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../../services/crudservice.service";
import {DialogComponent} from "../../dialog/dialog.component";
import {CarpetdialogueComponent} from "../carpetdialogue/carpetdialogue.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-carpet',
  templateUrl: './carpet.component.html',
  styleUrls: ['./carpet.component.css']
})
export class CarpetComponent implements OnInit{
  displayedColumns: string[] = ['id','lib','carpetsize','price','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,private crud:CrudserviceService,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.getAll()
  }
  openDialog() {
    const dialogRef = this.dialog.open(CarpetdialogueComponent,{
      width:'30%'
    }).afterClosed().subscribe(value => {
      if (value=='save'){
        this.getAll();
      }
    });

  }
  getAll(){
    this.crud.getcarpet().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource<any>(res)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },
      error:()=>{
        this.toastr.info("error while fetching records")
      }
    })

  }
  editcarpet(row :any){
    this.dialog.open(CarpetdialogueComponent,{
      width:'30%',
      data:row

    }).afterClosed().subscribe(value => {
      if (value=='update'){
        this.getAll();
      }
    });
  }
  deletecarpet(id:number){
    this.crud.deletecarpet(id).subscribe({
      next:(res)=>{
        this.toastr.success("carpet deleted successfully");
        this.getAll();
      },
      error:()=>{
        this.toastr.error("Error while Deleting the carpet")
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
