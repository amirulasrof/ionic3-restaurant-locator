import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
  

  goToHome(){
    this.presentLoading();
    this.navCtrl.setRoot(HomePage);
  }

  presentLoading() {
  let loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: 'Searching for nearby restaurant'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 3000);

  }

}