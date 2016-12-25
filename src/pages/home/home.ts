import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pushPage(){
this.navCtrl.push(Page1);
  }
}
