declare var window;
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-add-quotes',
  templateUrl: 'add-quotes.html'
})

export class AddQuotesPage {
  errorMessage: any;
  myQuotes: any = [];
  newQuote: any = "";
  loader: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public storage: Storage, public toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  addQuote() {
    if (this.newQuote !== "") {
      this.storage.get('myQuotes').then(data => {
        this.myQuotes = JSON.parse(data) ? JSON.parse(data) : [];
        this.myQuotes.push(this.newQuote);
        this.storage.set('myQuotes', JSON.stringify(this.myQuotes) );
        this.presentToast("Quote Saved");
        this.newQuote = "";
      });
    } else {
      this.presentToast("Quote can not be blank");
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "top"
    });
    toast.onDidDismiss(() => { });
    toast.present();
  }

}
