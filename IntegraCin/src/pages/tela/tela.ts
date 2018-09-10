import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';


@IonicPage()
@Component({
  selector: 'page-tela',
  templateUrl: 'tela.html',
})
export class TelaPage {
  _imageViewerCtrl : ImageViewerController;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, imageViewerCtrl: ImageViewerController){
    this._imageViewerCtrl = imageViewerCtrl;
  }
  
  openMenu() {
     this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  } 
  
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  openPage(){
    window.open("http://via.ufsc.br/evento/",'_system', 'location=yes');

  }
   
  
}
