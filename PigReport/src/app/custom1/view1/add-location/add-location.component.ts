import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Coordinates } from './coordinates';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  // @Input() place: Coordinates = this.location();
  @Output() places = new EventEmitter<Coordinates>();

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  arr: any;
  check(): number {
    this.http.get<any>("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-data/documents/").subscribe((data: any) => {
      this.arr = data;
      for (let i: number = 0; i < this.arr.length; i++) {
        if (this.arr[i]['key'] == (<HTMLInputElement>document.getElementById("place")).value) {
          let a = Number(this.arr[i]['data']['cases']);
          console.log(a);
          a++;
          console.log(a);
          return a;
        }
      }
      return 1;
    })
    return 1;
  }
  location() {
    let a = this.check();
    const data: Coordinates = {
      place: (<HTMLInputElement>document.getElementById("place")).value,
      latitude: Number((<HTMLInputElement>document.getElementById("lat")).value),
      longtitude: Number((<HTMLInputElement>document.getElementById("long")).value),
      cases: a,
    }
    console.log(data.cases);
    this.places.emit(data);
    return data;
  }
}
