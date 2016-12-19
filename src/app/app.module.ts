import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import {MomentModule} from 'angular2-moment';
//-- app pages
import { MyQuotesPage } from '../pages/quotes/my-quotes';
import { AddQuotesPage } from '../pages/quotes/add-quotes';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyQuotesPage,
    AddQuotesPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyQuotesPage,
    AddQuotesPage,
    AboutPage
  ],
  providers: [
    Storage
  ]
})

export class AppModule {

}
