import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarEquipamentoPageRoutingModule } from './criar-equipamento-routing.module';

import { CriarEquipamentoPage } from './criar-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarEquipamentoPageRoutingModule
  ],
  declarations: [CriarEquipamentoPage]
})
export class CriarEquipamentoPageModule {}
