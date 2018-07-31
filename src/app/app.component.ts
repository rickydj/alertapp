import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  config: BackgroundGeolocationConfig = {
    desiredAccuracy: 10,
    stationaryRadius: 20,
    distanceFilter: 30,
    debug: false, //  enable this hear sounds for background-geolocation life-cycle.
    stopOnTerminate: true, // enable this to clear background location settings when the app terminates
  };

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backgroundGeolocation: BackgroundGeolocation) {
    platform.ready().then(() => {
      this.backgroundGeolocation.configure(this.config)
        .subscribe((location: BackgroundGeolocationResponse) => {
          console.log(location);
       //   this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
      this.backgroundGeolocation.start();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
