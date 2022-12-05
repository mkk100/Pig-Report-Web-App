import { Component, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/custom1/view1/add-location/coordinates';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { info } from './pigInformation';
@Component({
  selector: 'app-pig-report',
  templateUrl: './pig-report.component.html',
  styleUrls: ['./pig-report.component.css']
})

export class PigReportComponent implements OnInit {
  render_data !: info;
  password : string = "OINK!!";
  press : Boolean= true;
  dataSource = new MatTableDataSource<info>();
  table: info[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
  add() {

  }
  render() {
    let j = 0;
    for (let i = 0; i < 30; i++) {
      this.http.get<info>('https://272.selfip.net/apps/VTJlUDzrwx/collections/272-PigInfo/documents/')
        .subscribe((data: any) => {
          if (data != null) {
            this.render_data = {
              date: data[i].data["Time"],
              reporter: data[i].data["name"],
              breed: data[i].data["Breed"],
              status: data[i].data["Status"],
              pigID: data[i].key
            }
            //this.render_data.reporter = "min";
            //this.render_data.date != data[0].data["Time"];
            // this.render_data.reporter != data[0].data["name"];
            // this.render_data.pigID != data[0].key;
            // this.render_data.status!= data[0].data["Status"];
            // this.render_data.status != data[0].data["Breed"];
            // this.render_data = data;
            //j = data.length();
            //console.log(this.render_data);
            //console.log(this.render_data);
            this.table.push(this.render_data);
            this.dataSource.data = this.table;
          }
        })
    }


  }
  displayedColumns: string[] = ['ID', 'breed', 'reporter', 'Time', 'status', 'delete'];
  loadWindow(): void {
    window.location.reload();
  }
  remove(i: number) {
    this.http.delete<info>("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-PigInfo/" + this.table[i].pigID)
    delete this.table[i];
    this.dataSource.data = this.table;
  }
  toggle(){
    this.press = !this.press;
  }
  check(i: number){
    let pw:string;
    pw  = (<HTMLInputElement>document.getElementById("input")).value;
    if(pw === this.password){
      this.toggle();
      this.remove(i);
      return true;
    }
    return false;
  }
}



