import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardAuthService, GuardSearchService } from './services/guards/guard.service';
import { SearcherModule } from './pages/searcher/searcher.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'searcher', pathMatch: 'full'
},
  {
    path: 'searcher',
    canActivate: [GuardSearchService],
    loadChildren: () => SearcherModule
  },
  {
    path: 'login',
    canActivate: [GuardAuthService],
    loadChildren: () => LoginModule
  },
  {
    path: 'register',
    canActivate: [GuardAuthService],
    loadChildren: () => RegisterModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
