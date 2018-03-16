import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {
  offers:[{
    image:string,
    title:string
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.offers = [
  {
  	image:'offers_1.jpg',
    title:'Mutton Slice'

  },
  {
  	image:'offers_1.jpg',
  	title:'Mutton Slice'
  },
  {
  	image:'offers_1.jpg',
  	title:'Mutton Slice'
  }
  ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

}
