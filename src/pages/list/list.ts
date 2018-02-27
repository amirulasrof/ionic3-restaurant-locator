import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { AlertController } from 'ionic-angular';
//import { Http } from '@angular/http';
//import { Injectable } from '@angular/core';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@Injectable()
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  //data: any;

  constructor(public navCtrl: NavController, 
    public locations: LocationsProvider, 
    private launchNavigator: LaunchNavigator, 
    private alertCtrl: AlertController) {
  }

  /*load() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/locations.json').map(res => res.json()).subscribe(data => {

        this.data = this.navme(data.locations);

        resolve(this.data);
      });

    });

  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  navme(address) {
    this.launchNavigator.navigate(address);
  }

  presentAlert(){
    let alert = this.alertCtrl.create({
    title: 'Nearby restaurant details',
    subTitle: 'Sort based on nearest restaurant first and navigation third party app options',
    buttons: ['Ok']
    });
    alert.present();
  }

  /*goToDetail()
  {
    this.navCtrl.setRoot(DetailPage)
  }*/
}
