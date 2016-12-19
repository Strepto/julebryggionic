import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VurderPage } from '../vurder/vurder'
import { Drikke } from '../../models/drikke';
import { Julejsonapi } from '../../providers/julejsonapi';



/*
  Generated class for the Vurderliste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vurderliste',
  templateUrl: 'vurderliste.html'
})
export class VurderlistePage {

  drikker: Drikke[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private julejsonapi: Julejsonapi) {
    this.julejsonapi.load().subscribe(drikker => {
      this.drikker = drikker;
      console.log(drikker);
      console.log(this.drikker);
    });
  }

  drikkeTapped(event, drikke) {
    this.navCtrl.push(VurderPage, {
      drikke: drikke
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VurderlistePage');
  }

}
