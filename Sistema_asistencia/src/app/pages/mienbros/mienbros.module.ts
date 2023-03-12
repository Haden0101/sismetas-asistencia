import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MienbrosPageRoutingModule } from './mienbros-routing.module';

import { MienbrosPage } from './mienbros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MienbrosPageRoutingModule
  ],
  declarations: [MienbrosPage]
})
export class MienbrosPageModule {}
