import { Component, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/custom1/view1/add-location/coordinates';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { info } from './pigInformation';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DelModalComponent } from './del-modal/del-modal.component';
import { PigDataService } from './pig-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pig-report',
  templateUrl: './pig-report.component.html',
  styleUrls: ['./pig-report.component.css']
})

export class PigReportComponent implements OnInit {
  arr!: info[];
  render_data !: info;
  index  !: number;
  password: string = "OINK!!";
  press: Boolean = true;
  dataSource = new MatTableDataSource<info>();
  table: info[] = [];

  constructor(private http: HttpClient, private edit: MatDialog, private del: MatDialog, private pd: PigDataService, private router: Router) {
  }
  editModal() {
    this.edit.open(EditModalComponent)

  }
  delModal(i: number) {
    this.index = i;
    this.del.open(DelModalComponent, {
      data: this.table[i]["pigID"]
    })

  }

  ngOnInit(): void {
    this.http.get<info[]>('https://272.selfip.net/apps/VTJlUDzrwx/collections/272-PigInfo/documents/').subscribe((data: any) => {
      this.arr = data;
      for (let i: number = 0; i < this.arr.length; i++) {
        this.render_data = {
          date: data[i]["data"]["Time"],
          reporter: data[i]["data"]["name"],
          breed: data[i]["data"]["Breed"],
          status: data[i]["data"]["Status"],
          pigID: data[i]["key"]
        }
        this.table.push(this.render_data);
        this.dataSource.data = this.table;
      }
    })
  }
  onEdit(evt: any, ind: string) {
    this.router.navigate(["/edit", ind])
  }
  add() {

  }
  render() {



  }
  displayedColumns: string[] = ['ID', 'breed', 'reporter', 'Time', 'status', 'delete', 'edit'];
  remove(i: number) {
    this.pd.remove(i);
  }
  toggle() {
    this.press = !this.press;
  }
  check(i: number) {
    let pw: string;
    pw = (<HTMLInputElement>document.getElementById("input")).value;
    if (pw === this.password) {
      this.toggle();
      this.remove(i);
      return true;
    }
    return false;
  }
}



