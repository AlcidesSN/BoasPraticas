import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Habilidades } from 'src/model/ficha';

@Component({
  selector: 'app-criar-habilidade',
  templateUrl: './criar-habilidade.page.html',
  styleUrls: ['./criar-habilidade.page.scss'],
})
export class CriarHabilidadePage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  habilidades:Habilidades = {
    nome_habilidade: '',
    tipo: '',
    usos: 0,
    recarga: '',
    descricao: ''
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.habilidades, 'confirm');
  }

}
