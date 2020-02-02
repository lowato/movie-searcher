import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterLayoutComponent } from '../../layout/register-layout/register-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterLayoutComponent,
    children: [
      { path: '', component: RegisterComponent, outlet: 'register' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
