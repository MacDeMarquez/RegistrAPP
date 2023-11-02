import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoalumnosPage } from './infoalumnos.page';

const routes: Routes = [
  {
    path: '',
    component: InfoalumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoalumnosPageRoutingModule {}
