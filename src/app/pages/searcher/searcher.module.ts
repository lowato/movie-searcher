import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';
import { SearcherLayoutComponent } from '../../layout/searcher-layout/searcher-layout.component';

@NgModule({
  declarations: [
    SearcherComponent,
    SearcherLayoutComponent
  ],
  imports: [
    CommonModule,
    SearcherRoutingModule
  ]
})
export class SearcherModule { }
