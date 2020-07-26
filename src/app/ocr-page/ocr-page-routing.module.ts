import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcrPagePage } from './ocr-page.page';

const routes: Routes = [
  {
    path: '',
    component: OcrPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcrPagePageRoutingModule {}
