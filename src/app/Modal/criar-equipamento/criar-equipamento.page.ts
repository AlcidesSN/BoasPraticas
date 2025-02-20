import { Equipamento } from './../../../model/ficha';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-criar-equipamento',
  templateUrl: './criar-equipamento.page.html',
  styleUrls: ['./criar-equipamento.page.scss'],
})
export class CriarEquipamentoPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  equipamento:Equipamento = {
    nome_Equipamento: '',
    descricao:'',
    dano:'',
    alcance:'',
    propriedades:''
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.equipamento, 'confirm');
  }

}
