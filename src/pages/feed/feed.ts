import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Rating } from '../../models/rating'
import { Julejsonapi } from '../../providers/julejsonapi';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  ratings: Rating[]
  constructor(public navCtrl: NavController, public navParams: NavParams,  private julejsonapi: Julejsonapi) {
    this.julejsonapi.loadAllRatings().subscribe(ratings => {
        this.ratings = ratings;
        console.log(ratings);
        console.log(this.ratings);
      })
    

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    
  }

  ionViewDidEnter() {
    this.julejsonapi.loadAllRatings().subscribe(ratings => {
        this.ratings = ratings;
        console.log(ratings);
        console.log(this.ratings);
      })
  }
}
