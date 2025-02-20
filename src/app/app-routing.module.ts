import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'criar-equipamento',
    loadChildren: () => import('./Modal/criar-equipamento/criar-equipamento.module').then( m => m.CriarEquipamentoPageModule)
  },
  {
    path: 'criar-habilidade',
    loadChildren: () => import('./Modal/criar-habilidade/criar-habilidade.module').then( m => m.CriarHabilidadePageModule)
  },  {
    path: 'criar-magia',
    loadChildren: () => import('./Modal/criar-magia/criar-magia.module').then( m => m.CriarMagiaPageModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('./Modal/image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
  },
  {
    path: 'config-basicas',
    loadChildren: () => import('./Modal/config-basicas/config-basicas.module').then( m => m.ConfigBasicasPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
