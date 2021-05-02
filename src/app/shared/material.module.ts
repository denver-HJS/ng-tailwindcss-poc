import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
