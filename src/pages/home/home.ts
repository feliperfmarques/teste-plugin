import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

//declare var cloudSky;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform) {

  }

  openScan(){
    console.log("aqui");
    // this.platform.ready().then(() => {
    //   cloudSky.zBar.scan(
    //   {
    //     text_instructions: "Alinhe a câmera com o código de barras à ser lido.",
    //     camera: "back",
    //     flash: "off",
    //     drawSight: true,
    //   },
    //   (barcode: string) => {
    //      console.log(barcode);
    //   },
    //   (error: string) => {
    //     console.log(error);
    //   });
    // });
  }

}
