import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FichasService } from 'src/app/services/fichas.service';

interface Base{
  nome:string,
  classe:string,
  raca:string,
  nivel:number,
  maxHp:number,
  ac:number,
  vel:string
}

@Component({
  selector: 'app-config-basicas',
  templateUrl: './config-basicas.page.html',
  styleUrls: ['./config-basicas.page.scss'],
})


export class ConfigBasicasPage implements OnInit {
  base:Base = {
    nome: '',
    classe: '',
    raca: '',
    nivel: 0,
    maxHp: 0,
    ac: 0,
    vel: ''
}
  constructor(private modalCtrl:ModalController, private storageProvider:FichasService) { }

  pegarInfo(){
    this.storageProvider.getAll()
    .then((ficha) => {
      this.base.nome = ficha[0].nome;
      this.base.classe = ficha[0].classe;
      this.base.raca = ficha[0].raca;
      this.base.nivel = ficha[0].nivel;
      this.base.maxHp = ficha[0].hpMax; 
      this.base.ac = ficha[0].ac; 
      this.base.vel = ficha[0].vel; 

    })
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.base, 'confirm');
  }
  ngOnInit() {
    this.pegarInfo()
  }



}
