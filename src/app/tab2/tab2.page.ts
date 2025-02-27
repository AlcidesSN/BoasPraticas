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
    private controle:ModalController,
    private alertas:AlertController,
    private forneceDados:FichasService,
    private rolagem:RolldicesService,) {}

  ngOnInit(): void {
    this.pegarEquipamentos();
  }
  pegarEquipamentos(){
    this.forneceDados.pegarInformacoes()
    .then((ficha) => this.equipamento = ficha[0].equipamentos)
    .catch((err) => alert(err));
  }

  equipamento:Equipamento[] = [];
  nivel:number = 0;


   async openCriarEquipamento(){
    const modal = await this.controle.create({
      component: CriarEquipamentoPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if(role == 'cancel')
      return;
    this.equipamento.push(data);
    this.forneceDados.salvarEquipamento(this.equipamento)
   }
    modBP():any {
    this.forneceDados.pegarInformacoes()
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
        const alerta = await this.alertas.create({
          header: 'Arma com Acuidade',
          message: 'Deseja atacar com força ou destreza?',
          buttons: [
            {
              text: 'Força',
              handler: () => {
                this.forneceDados.pegarInformacoes()
                .then((ficha) => this.rolagem.rolarDado(this.equipamento[i].dano,(Math.round((ficha[0].for - 10)/2))) );
              }
            },
            {
              text: 'Destreza',
              handler: () => {
                this.forneceDados.pegarInformacoes()
                .then((ficha) => this.rolagem.rolarDado(this.equipamento[i].dano,(Math.round((ficha[0].des - 10)/2))) );
              }
            }
          ],
          });
          await alerta.present();
          return;
        }

    }
    this.forneceDados.pegarInformacoes()
    .then((ficha) => this.rolagem.rolarDado(this.equipamento[i].dano,(Math.round((ficha[0].for - 10)/2))) );
    
   }
   async apagarItem(i:number){
    const alerta = await this.alertas.create({
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
            this.forneceDados.salvarEquipamento(this.equipamento);
          }
        }
      ],
      });
      
      await alerta.present();
   }


}
