import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { OfferPage } from '../pages/offer/offer';
import { CartPage } from '../pages/cart/cart';
import { NewsPage } from '../pages/news/news';
import { ContactPage } from '../pages/contact/contact';
import { AboutUsPage } from '../pages/about-us/about-us';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, icon: string, component: any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', icon:'home',  component: HomePage },
      { title: 'Category', icon:'apps', component: CategoryPage },
      { title: 'Offers', icon:'pricetag', component: OfferPage },
      { title: 'MyCart', icon:'cart', component: CartPage },
      { title: 'News', icon:'paper', component: NewsPage },
      { title: 'Contact', icon:'call', component: ContactPage },
      { title: 'About-Us', icon:'contacts', component: AboutUsPage },
      { title: 'Login', icon:'log-in', component: LoginPage }
    ];
  }
  openPage(page) {
    this.nav.push(page.component);
    let loading = this.loadingCtrl.create({ 
      content: 'Please Wait..',
    });
    loading.present();
    setTimeout(() => {
     
    }, 1000);
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


}

