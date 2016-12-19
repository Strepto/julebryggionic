import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Rating } from '../../models/rating'
import { Drikke } from '../../models/drikke'

import { Julejsonapi } from '../../providers/julejsonapi';

@Component({
  selector: 'page-vurder',
  templateUrl: 'vurder.html'
})
export class VurderPage {
  drikke: Drikke;
  rating: Rating;
  constructor(public navCtrl: NavController, public navParams: NavParams, public julejsonapi: Julejsonapi) {
        // If we navigated to this page, we will have an item available as a nav param
      this.drikke = navParams.get('drikke');
      this.julejsonapi = julejsonapi;
      this.rating = <any>{};
      this.rating.BrukerID = 1;
      this.rating.DrikkeID = 1;      
  }

  logForm(){
    console.log(this.rating);
    let res = this.julejsonapi.saveRating(this.rating).subscribe(mod => 
        this.navCtrl.parent.select(3)
    );

  }
}
