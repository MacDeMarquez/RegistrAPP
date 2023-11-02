import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoalumnosPageRoutingModule } from './infoalumnos-routing.module';

import { InfoalumnosPage } from './infoalumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoalumnosPageRoutingModule
  ],
  declarations: [InfoalumnosPage]
})
export class InfoalumnosPageModule {}
