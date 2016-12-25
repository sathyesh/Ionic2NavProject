import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page4 } from '../page4/page4';

@Component({
  selector: 'page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(public navCtrl: NavController) {

  }
      pushPage(){
this.navCtrl.push(Page4);
  }
}
