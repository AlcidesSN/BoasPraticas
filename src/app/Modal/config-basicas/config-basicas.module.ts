import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigBasicasPageRoutingModule } from './config-basicas-routing.module';

import { ConfigBasicasPage } from './config-basicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigBasicasPageRoutingModule
  ],
  declarations: [ConfigBasicasPage]
})
export class ConfigBasicasPageModule {}
