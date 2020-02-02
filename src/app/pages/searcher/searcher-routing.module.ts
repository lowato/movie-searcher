import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearcherLayoutComponent } from '../../layout/searcher-layout/searcher-layout.component';
import { SearcherComponent } from './searcher.component';

const routes: Routes = [
  {
    path: '',
    component: SearcherLayoutComponent,
    children: [
      { path: '', component: SearcherComponent, outlet: 'searcher' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearcherRoutingModule { }
