import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Drikke } from '../../models/drikke';
import { Julejsonapi } from '../../providers/julejsonapi';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  drikker: Drikke[]
  constructor(public navCtrl: NavController,  private julejsonapi: Julejsonapi) {
    julejsonapi.load().subscribe(drikker => {
      this.drikker = drikker;
      console.log(drikker);
      console.log(this.drikker);
    });

  }
}
