import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './component';
import { StateFilterPipe } from './pipes/state-filter.pipe';

const COMPONENTS = [FooterComponent];
const PIPES = [StateFilterPipe];

@NgModule({
  declarations: [COMPONENTS, PIPES],
  exports: [COMPONENTS, PIPES],
  imports: [CommonModule],
})
export class SharedModule {}
