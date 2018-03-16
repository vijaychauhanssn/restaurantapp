import { Component , NgModule} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

   items: Array<string>;

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Orange'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  Go(page){
  this.navCtrl.push(page);
  }
}
