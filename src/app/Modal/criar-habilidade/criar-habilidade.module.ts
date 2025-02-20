import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarHabilidadePageRoutingModule } from './criar-habilidade-routing.module';

import { CriarHabilidadePage } from './criar-habilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarHabilidadePageRoutingModule
  ],
  declarations: [CriarHabilidadePage]
})
export class CriarHabilidadePageModule {}
