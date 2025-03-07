import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FichasService } from '../services/fichas.service';
import { Magias } from 'src/model/ficha';
import { CriarMagiaPage } from '../Modal/criar-magia/criar-magia.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private controle:ModalController,
    private alertas:AlertController,
    private forneceDados:FichasService) { }

  ngOnInit() {
    this.pegarMagias();
  }

  magias:Magias[] = [];
  circulo:number[] = [0,1,2,3,4,5,6,7,8,9];
  
  pegarMagias(){
    this.forneceDados.pegarInformacoes()
    .then((ficha) => this.magias = ficha[0].magias)
    .catch((err) => alert(err));
  }


async openCriarMagias(){
  const modal = await this.controle.create({
    component: CriarMagiaPage,
  });
  modal.present();

  const { data, role } = await modal.onWillDismiss();
  if(role == 'cancel')
    return;
  this.magias.push(data);
  this.forneceDados.salvarMagias(this.magias);
 }
 
 async apagarItem(i:number){
  const alert = await this.alertas.create({
    header: 'Excluir Habilidades',
    message: 'Deseja mesmo excluir o Habilidades',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Excluir',
        handler: () => {
          this.magias.splice(i,1);
          this.forneceDados.salvarMagias(this.magias);
        }
      }
    ],
    });
    
    await alert.present();
 }
}

