declare var window;
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-my-quotes',
  templateUrl: 'my-quotes.html'
})

export class MyQuotesPage {
  errorMessage: any;
  myQuotes: any = [];
  loader: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public storage: Storage) { }

  ionViewDidEnter() {
    this.loadData();
  }

  ngOnInit() {
    let overlay = this.loadingCtrl.create({ content: "Loading ..." });
    this.loader = overlay;
    this.loader.present();
  }

  loadData() {
    this.storage.get('myQuotes').then(data => {
      this.myQuotes = JSON.parse(data) ? JSON.parse(data) : [];
      this.loader.dismiss();
    });
  }

}
