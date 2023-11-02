import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrasistenciaPageRoutingModule } from './qrasistencia-routing.module';

import { QrasistenciaPage } from './qrasistencia.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QrasistenciaPageRoutingModule
  ],
  declarations: [QrasistenciaPage]
})
export class QrasistenciaPageModule {}
