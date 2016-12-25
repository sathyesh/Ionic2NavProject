import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page3 } from '../page3/page3';

@Component({
  selector: 'page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController) {

  }
      pushPage(){
this.navCtrl.push(Page3);
  }

}
