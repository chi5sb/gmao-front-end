import { EquipesComponent } from './equipes/equipes.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ChefEquipeComponent } from './chef-equipe/chef-equipe.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockComponent} from "./stock/stock.component";

const componenets = [
  ChefEquipeComponent,
  CollaborateurComponent,
  AdministrateurComponent,
  HomeComponent,
  PageNotfoundComponent,
  EquipesComponent,
  StockComponent,
];

const routes: Routes = [
  {path: '', component: componenets[3]},
  {path: 'home',component: componenets[3]},
  {path: 'admin', component: componenets[2]},
  {path: 'collaborateur',component: componenets[1]},
  {path: 'chef-equipe', component: componenets[0]},
  {path: 'equipes',component: componenets[5]},
  {path: 'stock',component: componenets[6]},
  {path: '**', component: componenets[4]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
