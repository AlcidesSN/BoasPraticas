import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigBasicasPage } from './config-basicas.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigBasicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigBasicasPageRoutingModule {}
