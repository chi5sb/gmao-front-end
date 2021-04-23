
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';




const  MaterialModules = [
  MatButtonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatSidenavModule
];
@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterialModule { }
