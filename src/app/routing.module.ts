import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GalleryContainerComponent } from './shared/gallery/gallery-container/gallery-container.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/gallery/all',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    children: [
      {
        path: 'all',
        component: GalleryContainerComponent
      },
      {
        path: 'sly',
        component: GalleryContainerComponent
      },
      {
        path: 'essie',
        component: GalleryContainerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
