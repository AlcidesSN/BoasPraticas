import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FichasService } from '../services/fichas.service';
import { CriarHabilidadePage } from '../Modal/criar-habilidade/criar-habilidade.page';
import { Habilidades } from 'src/model/ficha';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private modalCtrl:ModalController,
  private alertController:AlertController,
  private storageProvider:FichasService)
  {}
  ngOnInit(): void {
    this.pegarEquipamentos();
  }
  pegarEquipamentos(){
    this.storageProvider.getAll()
    .then((ficha) => this.habilidades = ficha[0].habilidades)
    .catch((err) => alert(err));
  }


  habilidades:Habilidades[] = [];

  async openCriarHabilidade(){
    const modal = await this.modalCtrl.create({
      component: CriarHabilidadePage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if(role == 'cancel')
      return;
    this.habilidades.push(data);
    this.storageProvider.salvarHabilidades(this.habilidades)
 }
 
 async apagarItem(i:number){
  const alert = await this.alertController.create({
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
          this.habilidades.splice(i,1);
          this.storageProvider.salvarHabilidades(this.habilidades);
        }
      }
    ],
    });
    
  await alert.present();
 }
}