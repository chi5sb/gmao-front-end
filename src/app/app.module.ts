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
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EquipesComponent } from './equipes/equipes.component';
import { EquipeCreateComponent } from './equipes/equipe-create/equipe-create.component';
import { EquipeListComponent } from './equipes/equipe-list/equipe-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {StockListComponent} from './stock/stock-list/stock-list.component';
import {StockCreateComponent} from './stock/stock-create/stock-create.component';
import {StockComponent} from './stock/stock.component';
import {HttpClientModule} from '@angular/common/http';
import { InterventionComponent } from './intervention/intervention.component';
import { InterventionCreateComponent } from './intervention/intervention-create/intervention-create.component';
import { InterventionListComponent } from './intervention/intervention-list/intervention-list.component';
import { CollaborateurCreateComponent } from './collaborateur/collaborateur-create/collaborateur-create.component';
import { CollaborateurListComponent } from './collaborateur/collaborateur-list/collaborateur-list.component';
import { InterventionInfoComponent } from './intervention/intervention-info/intervention-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChefEquipeComponent,
    CollaborateurComponent,
    AdministrateurComponent,
    HomeComponent,
    PageNotfoundComponent,
    EquipesComponent,
    EquipeCreateComponent,
    EquipeListComponent,
    StockComponent,
    StockCreateComponent,
    StockListComponent,
    InterventionComponent,
    InterventionCreateComponent,
    InterventionListComponent,
    CollaborateurCreateComponent,
    CollaborateurListComponent,
    InterventionInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [EquipeCreateComponent]
})
export class AppModule { }
