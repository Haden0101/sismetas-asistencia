import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MienbrosPage } from './mienbros.page';

const routes: Routes = [
  {
    path: '',
    component: MienbrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MienbrosPageRoutingModule {}
