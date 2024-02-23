import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../../services/crudservice.service";
import {OwnerdialogueComponent} from "../ownerdialogue/ownerdialogue.component";
import {DetailsdialogueComponent} from "../detailsdialogue/detailsdialogue.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit{
  displayedColumns: string[] = ['id','idPrix','quantity','idUser','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,private crud:CrudserviceService,private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.getAll()
  }
  openDialog() {
    const dialogRef = this.dialog.open(OwnerdialogueComponent,{
      width:'30%'
    }).afterClosed().subscribe(value => {
      if (value=='save'){
        this.getAll();
      }
    });

  }
  getAll(){
    this.crud.getowner().subscribe({
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
  editowner(row :any){
    this.dialog.open(OwnerdialogueComponent,{
      width:'30%',
      data:row

    }).afterClosed().subscribe(value => {
      if (value=='update'){
        this.getAll();
      }
    });
  }
  deleteowner(id:number){
    this.crud.deleteowner(id).subscribe({
      next:(res)=>{
        this.toastr.success("owner deleted successfully");
        this.getAll();
      },
      error:()=>{
        this.toastr.error("Error while Deleting the owner")
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

  ownerdetails(id:number) {
    const dialogRef = this.dialog.open(DetailsdialogueComponent,{
      width:'50%',
      data:{id:id}
    });

  }
}
