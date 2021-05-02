import { Component, Input, OnInit } from '@angular/core';
import { GalleryImage } from '../models/gallery-image';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() content: GalleryImage;

  constructor() { }

  ngOnInit(): void {
  }

}
