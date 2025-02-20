import { AlertController, ModalController } from '@ionic/angular';
import { CriarEquipamentoPage } from '../Modal/criar-equipamento/criar-equipamento.page';
import { Equipamento } from './../../model/ficha';
import { Component, OnInit } from '@angular/core';
import { FichasService } from '../services/fichas.service';
import { RolldicesService } from '../services/rolldices.service';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(
    private modalCtrl:ModalController,
    private alertController:AlertController,
    private storageProvider:FichasService,
    private diceRoler:RolldicesService,) {}

  ngOnInit(): void {
    this.pegarEquipamentos();
  }
  pegarEquipamentos(){
    this.storageProvider.getAll()
    .then((ficha) => this.equipamento = ficha[0].equipamentos)
    .catch((err) => alert(err));
  }

  equipamento:Equipamento[] = [];
  nivel:number = 0;


   async openCriarEquipamento(){
    const modal = await this.modalCtrl.create({
      component: CriarEquipamentoPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if(role == 'cancel')
      return;
    this.equipamento.push(data);
    this.storageProvider.salvarEquipamento(this.equipamento)
   }
    modBP():any {
    this.storageProvider.getAll()
    .then((ficha) => {
      this.nivel = ficha[0].nivel

    });
    if (this.nivel <= 1 && this.nivel <= 4) {
      return 2;
    }else if (this.nivel <= 5 && this.nivel <= 8) {
      return 3;
    }else if (this.nivel <= 9 && this.nivel <= 12) {
      return 4;
    }else if (this.nivel <= 13 && this.nivel <= 16) {
      return 5;
    }else{
      return 6;
    }
    
  }
   
   async rolarDado(i:number){
    for (let index = 0; index < this.equipamento[i].propriedades.length; index++) {
      if (this.equipamento[i].propriedades[index] == 'Acuidade') {
        const alert = await this.alertController.create({
          header: 'Arma com Acuidade',
          message: 'Deseja atacar com força ou destreza?',
          buttons: [
            {
              text: 'Força',
              handler: () => {
                this.storageProvider.getAll()
                .then((ficha) => this.diceRoler.rolarDado(this.equipamento[i].dano,(Math.round((ficha[0].for - 10)/2))) );
              }
            },
            {
              text: 'Destreza',
              handler: () => {
                this.storageProvider.getAll()
                .then((ficha) => this.diceRoler.rolarDado(this.equipamento[i].dano,(Math.round((ficha[0].des - 10)/2))) );
              }
            }
          ],
          });
          await alert.present();
          return;
        }

    }
    this.storageProvider.getAll()
    .then((ficha) => this.diceRoler.rolarDado(this.equipamento[i].dano,(Math.round((ficha[0].for - 10)/2))) );
    
   }
   async apagarItem(i:number){
    const alert = await this.alertController.create({
      header: 'Excluir Equipamento',
      message: 'Deseja mesmo excluir o equipamento',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.equipamento.splice(i,1);
            this.storageProvider.salvarEquipamento(this.equipamento);
          }
        }
      ],
      });
      
      await alert.present();
   }


}
