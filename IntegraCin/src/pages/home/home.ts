import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelaPage } from '../tela/tela';
//import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public loginForm: any;
  //errorEmail = false;
  //errorPassword = false;
  //messageEmail = "";
  //messagePassword = "";

  constructor(public navCtrl: NavController) {

  }
  goToInicial(){
    this.navCtrl.push(TelaPage);
   }
}

  
  
  