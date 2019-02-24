// home.ts
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 weatherApp =" Constacts Application ";
 flag="/assets/imgs/contactsImg.jpg";
 countriesArray=[
  {"country": "bahrain", "city": "manama" },
  {"country": "FL", "city": "miami"},
  {"country": "KSA", "city": "riyad"  },
  {"country": "Egypt", "city": "Cairo"}
 ];
 countRec:number;

  constructor(public navCtrl: NavController,
    private alertCtrl:AlertController) {
  }
  aboutApp(){
    this.navCtrl.push(AboutPage);
  }

  addLocation() {
    let addCte = this.alertCtrl.create({
      title: "Location",
      message: "Enter a New Location",
      inputs: [
        {
          type: "text",
          name: "City",
          placeholder: "City"
        },
        {
          type: "text",
          name: "Country",
          placeholder:"Country"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: (newCountry) => {
            this.countriesArray.push(
              {
                "country": newCountry.Country,
                "city": newCountry.City
              }
            );
            this.countRec= this.countriesArray.length ;

          }
        }
      ]
    });
    addCte.present();
  }
}
