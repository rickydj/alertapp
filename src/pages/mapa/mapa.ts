import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent,
  Marker,
  CameraPosition,
  LatLng,
  LocationService,
  MyLocation
} from "@ionic-native/google-maps";

import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  map: GoogleMap;
  lat = 0;
  lon = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geoloc: Geolocation) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    console.log("ANTES DE INICIAR");

    LocationService.getMyLocation().then((myLocation: MyLocation) => {

      let options: GoogleMapOptions = {
        camera: {
          target: myLocation.latLng,
          zoom: 18,
          tilt: 45
        },

      };
      this.map = GoogleMaps.create('mapa', options);

      let marker: Marker = this.map.addMarkerSync({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: myLocation.latLng
      });

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('clicked');
      });

    });
  }

  alert(text) {
    alert(text);
  }
}
