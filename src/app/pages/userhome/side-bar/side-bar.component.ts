import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {CrudserviceService} from "../../services/crudservice.service";
import {UserdialogueComponent} from "../userdialogue/userdialogue.component";
import {AuthService} from "../../services/auth.service";
import {StateManagerService} from "../../../services/state-manager.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  displayedColumns: string[] = ['id','idPrix','quantity','idUser'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private state:StateManagerService ,private dialog:MatDialog,private crud:CrudserviceService,private auth:AuthService) {
  }
  ngOnInit(): void {
    this.getAll(this.state.currentUserValue.id)
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserdialogueComponent,{
      width:'30%'
    }).afterClosed().subscribe(value => {
      if (value=='save'){
        this.getAll(this.state.currentUserValue.id);
      }
    });

  }
  getAll(id:number){
    this.auth.findbyid(id).subscribe({
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
