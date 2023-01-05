import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { info } from '../pig-report/pigInformation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-pig-report',
  templateUrl: './create-pig-report.component.html',
  styleUrls: ['./create-pig-report.component.css']
})

export class CreatePigReportComponent implements OnInit {
  pinfo!: info;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    // this.pigForm = this.formBuild.group({
    //   name: (<HTMLInputElement>(document.getElementById('name'))).value,
    //   id: (<HTMLInputElement>(document.getElementById('id'))).value,
    //   breed: (<HTMLInputElement>(document.getElementById('breed'))).value,
    //   time: (<HTMLInputElement>(document.getElementById('time'))),
    //   status: (<HTMLInputElement>(document.getElementById('status'))).value
    //   })
  }
  saveInDB() {
    this.http.post("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-PigInfo/documents/", {
      "key": `${(<HTMLInputElement>(document.getElementById('num'))).value}`, "data": {
        "name": `${(<HTMLInputElement>(document.getElementById('name'))).value}`,
        "Breed": `${(<HTMLInputElement>(document.getElementById('breed'))).value}`,
        "Time": `${(<HTMLInputElement>(document.getElementById('time'))).value}`,
        "Status": `${(<HTMLInputElement>(document.getElementById('status'))).value}`
      }
    }).subscribe((data: any) => {
      console.log(data)
    });
    this.router.navigate(["/PigReport"])
  }
  loadWindow(): void {
    //window.location.reload();
  }

}
