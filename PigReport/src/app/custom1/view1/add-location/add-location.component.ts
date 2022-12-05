import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Coordinates } from './coordinates';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  // @Input() place: Coordinates = this.location();
  @Output() places = new EventEmitter<Coordinates>();

  constructor() { }

  ngOnInit(): void {
    
  }

  location(){
    const data: Coordinates = {
      place: (<HTMLInputElement>document.getElementById("place")).value,
      latitude: Number((<HTMLInputElement>document.getElementById("lat")).value),
      longtitude: Number((<HTMLInputElement>document.getElementById("long")).value)
    }
    this.places.emit(data);
    return data;
  }
}
