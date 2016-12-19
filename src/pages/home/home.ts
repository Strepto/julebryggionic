import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Rating } from '../../models/rating'

import { Julejsonapi } from '../../providers/julejsonapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rating: Rating;
  constructor(public navCtrl: NavController, public julejsonapi: Julejsonapi) {
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
