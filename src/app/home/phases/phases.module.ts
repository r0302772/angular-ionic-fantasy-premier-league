import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhasesPageRoutingModule } from './phases-routing.module';

import { PhasesPage } from './phases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhasesPageRoutingModule
  ],
  declarations: [PhasesPage]
})
export class PhasesPageModule {}
