import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , Nav,LoadingController, Platform} from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	@ViewChild(Nav) nav: Nav;
	proucts: Array<{
	name: string,
	image: string,
	component: any
	}>;
	sliders: Array<{
	name: string,
	image: string}>;	

	constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController){
	this.sliders = [
	{
	name:'Featured Product',
	image:'slider_1.jpg',	
	},
	{
	name:'Featured Product',
	image:'slider_2.jpg',	
	},
	{
	name:'Featured Product',
	image:'slider_3.jpg',	
	},
	];

	this.proucts = [
	{
	name:'Salads',
	image:'products_1.jpg',
	component: ProductListPage
	},
	{
	name:'Sides',
	image:'products_2.jpg',
  component: ProductListPage
	},
	{
	name:'Desserts',
	image:'products_3.jpg',
  component: ProductListPage
	},
	{
	name:'Main Course',
	image:'products_4.jpg',
  component: ProductListPage
	},
	{
	name:'Starters',
	image:'products_5.jpg',
  component: ProductListPage
	},
	{
	name:'Slice',
	image:'products_6.jpg',
  component: ProductListPage
	}
	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  Go(page){
   this.navCtrl.push(page);
  }
	presentLoadingCrescent() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'This is the "crescent" spinner. It will dismiss after 3 seconds.',
      duration: 3000
    });

    loading.present();
  }

  
   Go_loading() {
    let loading = this.loadingCtrl.create({ 
    	content: 'Please Wait..',
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.push(ProductListPage);
    }, 1000);
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

}
