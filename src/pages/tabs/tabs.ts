import { Component } from '@angular/core';

import { VurderlistePage } from '../vurderliste/vurderliste';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = VurderlistePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = FeedPage;

  constructor() {

  }
}
