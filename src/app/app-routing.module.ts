import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsLoginService, GuardsCheckIsLoginService } from './services/guards/guards.service';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SearcherLayoutComponent } from './layout/searcher-layout/searcher-layout.component';
import { SearcherComponent } from './pages/searcher/searcher.component';

const routes: Routes = [
  {
    path: '',
    component: SearcherLayoutComponent,
    canActivate: [GuardsCheckIsLoginService],
    children: [
      { path: '', component: SearcherComponent, outlet: 'searcher' }
    ]
  },
  {
    path: 'login',
    canActivate: [GuardsLoginService],
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent, outlet: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
