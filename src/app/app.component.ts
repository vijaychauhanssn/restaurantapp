import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CategoryPage } from '../pages/category/category';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, icon: string, component: any}>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', icon:'home',  component: LoginPage },
      { title: 'Category', icon:'apps', component: CategoryPage },
      { title: 'Offers', icon:'pricetag', component: CategoryPage },
      { title: 'MyCart', icon:'cart', component: CategoryPage },
      { title: 'News', icon:'paper', component: CategoryPage },
      { title: 'Contact', icon:'call', component: CategoryPage },
      { title: 'About-Us', icon:'contacts', component: CategoryPage },
      { title: 'Login', icon:'log-in', component: CategoryPage }
    ];

  }

  openPage(page) {
    this.nav.push(page.component);
  }



}

