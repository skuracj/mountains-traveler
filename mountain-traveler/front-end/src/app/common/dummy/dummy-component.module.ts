import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DummyComponent } from './dummy.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [DummyComponent],
  exports: [DummyComponent]
})
export class ExploreContainerComponentModule {}
