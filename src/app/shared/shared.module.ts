import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryContainerComponent } from './gallery/gallery-container/gallery-container.component';
import { MaterialModule } from './material.module';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    GalleryContainerComponent,
    GalleryItemComponent
  ]
})
export class SharedModule { }
