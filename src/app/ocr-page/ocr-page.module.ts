import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcrPagePageRoutingModule } from './ocr-page-routing.module';

import { OcrPagePage } from './ocr-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcrPagePageRoutingModule
  ],
  declarations: [OcrPagePage]
})
export class OcrPagePageModule {}
