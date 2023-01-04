import { Component, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/custom1/view1/add-location/coordinates';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { info } from './pigInformation';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { DelModalComponent } from './del-modal/del-modal.component';
@Component({
  selector: 'app-pig-report',
  templateUrl: './pig-report.component.html',
  styleUrls: ['./pig-report.component.css']
})

export class PigReportComponent implements OnInit {
  render_data !: info;
  password: string = "OINK!!";
  press: Boolean = true;
  dataSource = new MatTableDataSource<info>();
  table: info[] = [];
  constructor(private http: HttpClient, private edit: MatDialog, private del: MatDialog) {
  }
  editModal() {
    this.edit.open(EditModalComponent)
  }
  delModal() {
    this.del.open(DelModalComponent)
  }
  arr!: info[];
  ngOnInit(): void {
    this.http.get<info[]>('https://272.selfip.net/apps/VTJlUDzrwx/collections/272-PigInfo/documents/').subscribe((data: any) => {
      this.arr = data;
      console.log(data[0])
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


  add() {

  }
  render() {



  }
  displayedColumns: string[] = ['ID', 'breed', 'reporter', 'Time', 'status', 'delete', 'edit'];
  loadWindow(): void {
    window.location.reload();
  }
  remove(i: number) {
    this.http.delete<info>("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-PigInfo/" + this.table[i].pigID)
    delete this.table[i];
    this.dataSource.data = this.table;
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



