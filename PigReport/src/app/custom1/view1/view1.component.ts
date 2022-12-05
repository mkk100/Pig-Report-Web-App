import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { Coordinates } from './add-location/coordinates';
import { HttpClient } from '@angular/common/http';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements AfterViewInit {

  location!: Coordinates;

  private map: any;
  constructor(private http: HttpClient) { }
  ngOnint(): void {
    this.http.get<Coordinates>('/apps/VTJlUDzrwx/collections/272-Locations/documents/')
      .subscribe((data: any) => {
        console.log(data)
      })

  }
  ngAfterViewInit(): void {
    this.map = L.map('mapid').setView([19.2, -123], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhvbWFzLTIyIiwiYSI6ImNsYXllc3ExazB5aDA0MGp1cnM4NnhvOHQifQ.S9BPv5LCE-QBpVsO7zfBLA', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href = "https://www.openstreepmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery Ⓒ  <a href = "https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    //L.marker([49.2276, -123.0076]).addTo(this.map).bindPopup("<b>Metrotown</b><br/>cases reported.").openPopup();
    // L.marker([49.1867, -123.8490]).addTo(this.map).bindPopup("<b>SFU Surrey</b><br/>cases reported.").openPopup();
    // L.marker([this.location.longtitude, this.location.latitude]).addTo(this.map).bindPopup(`<b>${this.location.place}</b><br/>cases reported.`).openPopup();
  }
  addLocation(newLocation: Coordinates) {
    this.http.get("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-data/documents/").subscribe((data: any) => {
      console.log(data[0]);
      for (let i = 0; i < 30; i++) {
        //data[i].data[`${newLocation.place}`]
      }
    })
    this.http.post("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-data/documents/", { "key": `${newLocation.place}`, "data": { "longtitude": `${newLocation.longtitude}`, "latitude": `${newLocation.latitude}` } }).subscribe((data: any) => {
      //console.log(data)
    });
    this.http.get("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-Locations/documents/").subscribe((data: any) => {
      console.log(data)
      if (data == null) {
        this.http.post("https://272.selfip.net/apps/VTJlUDzrwx/collections/272-Locations/documents/", {
          "key": `${newLocation.place}`, "data": {
            "cases": 1
          }
        })
      }
    })
    L.marker([newLocation.latitude, newLocation.longtitude]).addTo(this.map).bindPopup(`<b>${newLocation.place}</b><br/>cases reported.`).openPopup();
  }
}