
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';



const  MaterialModules = [
  MatButtonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatStepperModule,
  MatTabsModule,
  MatCardModule,
  MatSnackBarModule,
  MatExpansionModule
];
@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterialModule { }
