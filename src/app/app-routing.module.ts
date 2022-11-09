import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossComponent } from './boss/boss.component';
import { HomeComponent } from './home/home.component';
import { RessourcesComponent } from './ressources/ressources.component';

const routes: Routes = [
  {path: 'ressource/boss', component: BossComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ressource', component: RessourcesComponent},
  {path:"", redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
