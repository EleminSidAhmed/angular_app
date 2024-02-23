import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../../services/crudservice.service";
import {DialogeComponent} from "../dialoge/dialoge.component";
import {DialogComponent} from "../../dialog/dialog.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit{
  displayedColumns: string[] = ['id','lib','idType','prix','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,private crud:CrudserviceService,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.getAll()
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogeComponent,{
      width:'30%'
    }).afterClosed().subscribe(value => {
      if (value=='save'){
        this.getAll();
      }
    });

  }
  getAll(){
    this.crud.getprice().subscribe({
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
  editprice(row :any){
    this.dialog.open(DialogeComponent,{
      width:'30%',
      data:row

    }).afterClosed().subscribe(value => {
      if (value=='update'){
        this.getAll();
      }
    });
  }
  deleteprice(id:number){
    this.crud.deleteprice(id).subscribe({
      next:(res)=>{
        this.toastr.success("price deleted successfully");
        this.getAll();
      },
      error:()=>{
        this.toastr.error("Error while Deleting the price")
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
