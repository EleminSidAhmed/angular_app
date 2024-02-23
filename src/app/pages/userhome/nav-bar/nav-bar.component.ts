import {Component, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UtilService} from "../../../services/util.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {StateManagerService} from "../../../services/state-manager.service";
import {MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../services/crudservice.service";
import {UserdialogueComponent} from "../userdialogue/userdialogue.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  displayedColumns: string[] = ['id','idUser','idCarpet'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private state:StateManagerService ,private dialog:MatDialog,private crud:CrudserviceService,private auth:AuthService) {
  }
  ngOnInit(): void {
    this.getAll()
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserdialogueComponent,{
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
        alert("error while fetching records")
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
