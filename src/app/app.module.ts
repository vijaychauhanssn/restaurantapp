import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CategoryPage } from '../pages/category/category';
import { HomePage } from '../pages/home/home';
import { ProductListPage } from '../pages/product-list/product-list';
import { OfferPage } from '../pages/offer/offer';
import { CartPage } from '../pages/cart/cart';
import { NewsPage } from '../pages/news/news';
import { ContactPage } from '../pages/contact/contact';
import { AboutUsPage } from '../pages/about-us/about-us';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CategoryPage,
    ProductListPage,
    OfferPage,
    CartPage,
    NewsPage,
    HomePage,
    ContactPage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CategoryPage,
    ProductListPage,
    OfferPage,
    CartPage,
    NewsPage,
    HomePage,
    ContactPage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
