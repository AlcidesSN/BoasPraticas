import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Magias } from 'src/model/ficha';

@Component({
  selector: 'app-criar-magia',
  templateUrl: './criar-magia.page.html',
  styleUrls: ['./criar-magia.page.scss'],
})
export class CriarMagiaPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  circulo:number[] = [0,1,2,3,4,5,6,7,8,9];
  magias:Magias = {
    nome:'',
    circuloMagia: 0,
    componentes: '',
    conjuracao: '',
    descricao: '',
    duracao: '',
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.magias, 'confirm');
  }
}
