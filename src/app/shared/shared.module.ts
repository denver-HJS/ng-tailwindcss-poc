import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryContainerComponent } from './gallery/gallery-container/gallery-container.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    GalleryContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
