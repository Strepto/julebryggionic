import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { VurderPage } from '../pages/vurder/vurder';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { Julejsonapi } from '../providers/julejsonapi';
import { FeedPage } from '../pages/feed/feed';
import { VurderlistePage } from '../pages/vurderliste/vurderliste'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    VurderPage,
    TabsPage,
    LoginPage,
    ItemDetailsPage,
    FeedPage,
    VurderlistePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    VurderPage,
    LoginPage,
    TabsPage,
    ItemDetailsPage,
    FeedPage,
    VurderlistePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Julejsonapi]
})
export class AppModule {}
