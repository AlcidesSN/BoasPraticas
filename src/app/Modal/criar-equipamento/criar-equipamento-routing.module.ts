import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarEquipamentoPage } from './criar-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: CriarEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarEquipamentoPageRoutingModule {}
