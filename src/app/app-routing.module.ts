import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsLoginService, GuardsCheckIsLoginService } from './services/guards/guards.service';
import { SearcherModule } from './pages/searcher/searcher.module';
import { LoginModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuardsCheckIsLoginService],
    loadChildren: () => SearcherModule
  },
  {
    path: 'login',
    canActivate: [GuardsLoginService],
    loadChildren: () => LoginModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
