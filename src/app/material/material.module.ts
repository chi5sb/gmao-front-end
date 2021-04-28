
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';



const  MaterialModules = [
  MatButtonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatStepperModule
];
@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterialModule { }
