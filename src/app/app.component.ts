import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //rootPage: any = HomePage;
  rootPage: any;
  //loader: any;

  constructor(public platform: Platform, 
    public loadingCtrl: LoadingController, 
    public storage: Storage,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    //this.presentLoading();

    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#C0392B');
      splashScreen.hide();

      this.storage.get('introShown').then((result) => {
        // for looping the introduction page
        //if(result){
          //this.rootPage = 'Tabs';
        //} else {
          this.rootPage = 'IntroPage';
          this.storage.set('introShown', true);
        //}

        //this.loader.dismiss();
        
      });

    });

  }

  /*presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
      //duration: 5000
    });

    this.loader.present();

  }*/

}