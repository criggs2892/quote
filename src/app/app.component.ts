declare var window;
import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import {StatusBar, AdMob} from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: []
})

export class MyApp {
  rootPage = TabsPage;

  constructor(public platform: Platform, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

  }
}
