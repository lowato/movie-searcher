import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './services/guards/guard.service';
import { SearcherModule } from './pages/searcher/searcher.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'searcher', pathMatch: 'full'
},
  {
    path: 'searcher',
    canActivate: [GuardService],
    loadChildren: () => SearcherModule
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'register',
    loadChildren: () => RegisterModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
