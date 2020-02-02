import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './services/guards/guard.service';
import { SearcherModule } from './pages/searcher/searcher.module';
import { LoginModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuardService],
    loadChildren: () => SearcherModule
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
