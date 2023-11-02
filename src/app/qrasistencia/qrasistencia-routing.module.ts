import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrasistenciaPage } from './qrasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: QrasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrasistenciaPageRoutingModule {}
