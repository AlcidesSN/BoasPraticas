import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarMagiaPageRoutingModule } from './criar-magia-routing.module';

import { CriarMagiaPage } from './criar-magia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarMagiaPageRoutingModule
  ],
  declarations: [CriarMagiaPage]
})
export class CriarMagiaPageModule {}
