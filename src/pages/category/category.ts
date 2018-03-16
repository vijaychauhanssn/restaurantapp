import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
	categoryies: Array<{
	image:string,
	heading:string,
	title:string
	}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.categoryies = [
  	{
  	image:'1.jpg',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
  	heading:'Marty McFly'
  	},
  	{
  	image:'1.jpg',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
    heading:'Marty McFly'
  	},
  	{
  	image:'1.jpg',
  	heading:'Marty McFly',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
  	},
  	{
  	image:'1.jpg',
  	heading:'Marty McFly',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
  	},
  	{
  	image:'1.jpg',
  	heading:'Marty McFly',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
  	},
  	{
  	image:'1.jpg',
  	heading:'Marty McFly',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
  	},
  	{
  	image:'1.jpg',
  	heading:'Marty McFly',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
  	},
  	{
  	image:'1.jpg',
  	heading:'Marty McFly',
  	title:'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
  	}
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
