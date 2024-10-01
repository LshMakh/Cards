import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { CardComponent } from './pages/main/card/card.component';
import { Card } from './pages/card.model';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate:[AuthGuard]
   
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
