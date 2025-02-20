import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageUploadPage } from './image-upload.page';

const routes: Routes = [
  {
    path: '',
    component: ImageUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageUploadPageRoutingModule {}
