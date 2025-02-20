import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarMagiaPage } from './criar-magia.page';

const routes: Routes = [
  {
    path: '',
    component: CriarMagiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarMagiaPageRoutingModule {}
