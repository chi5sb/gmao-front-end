import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ChefEquipeComponent } from './chef-equipe/chef-equipe.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChefEquipeComponent,
    CollaborateurComponent,
    AdministrateurComponent,
    HomeComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
