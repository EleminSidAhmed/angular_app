import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../../services/crudservice.service";

@Component({
  selector: 'app-detailsdialogue',
  templateUrl: './detailsdialogue.component.html',
  styleUrls: ['./detailsdialogue.component.css']
})
export class DetailsdialogueComponent implements OnInit{
  displayedColumns: string[] = ['id','lib','quantity','nom'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private dialog:MatDialog,private crud:CrudserviceService,@Inject(MAT_DIALOG_DATA) public data :any,) {
  }
  ngOnInit(): void {
    this.getbyid(this.data.id)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getbyid(id:number){
    this.crud.getownerbyid(id).subscribe({
      next:(res)=>{
        // @ts-ignore
        this.dataSource=new MatTableDataSource<any>(res)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },
      error:()=>{
        alert("error while fetching records")
      }
    })

  }
  }
