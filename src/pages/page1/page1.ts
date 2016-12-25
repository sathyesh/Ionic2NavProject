import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from '../page2/page2';

@Component({
  selector: 'page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }
    pushPage(){
this.navCtrl.push(Page2);
  }

}
