import { Component } from '@angular/core';

//-- app pages for tabs
import { MyQuotesPage } from '../quotes/my-quotes';
import { AddQuotesPage } from '../quotes/add-quotes';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabMyQuotes: any = MyQuotesPage;
  tabAddQuotes: any = AddQuotesPage;
  tabAbout: any = AboutPage;

  constructor() {

  }
}
