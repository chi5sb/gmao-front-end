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
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { InterventionComponent } from './intervention/intervention.component';
import { InterventionCreateComponent } from './intervention/intervention-create/intervention-create.component';
import { InterventionListComponent } from './intervention/intervention-list/intervention-list.component';
import { CollaborateurCreateComponent } from './collaborateur/collaborateur-create/collaborateur-create.component';
import { CollaborateurListComponent } from './collaborateur/collaborateur-list/collaborateur-list.component';
import { InterventionInfoComponent } from './intervention/intervention-info/intervention-info.component';
import { MembreEquipeComponent } from './membre-equipe/membre-equipe.component';
import { InterventionConsielComponent } from './intervention/intervention-consiel/intervention-consiel.component';
import {OperationStockCreateComponent} from './operation-stock/operation-stock-create/operation-stock-create.component';
import {OperationStockListComponent} from './operation-stock/operation-stock-list/operation-stock-list.component';
import {OperationStockComponent} from './operation-stock/operation-stock.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    InterventionInfoComponent,
    MembreEquipeComponent,
    InterventionConsielComponent,
    OperationStockComponent,
    OperationStockCreateComponent,
    OperationStockListComponent,
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
    MatSnackBarModule,
    MatPaginatorModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EquipeCreateComponent],
})
export class AppModule {}
