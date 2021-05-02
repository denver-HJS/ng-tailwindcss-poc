import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../models/gallery-image';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.scss']
})
export class GalleryContainerComponent implements OnInit {
  galleryImages: Array<GalleryImage>;

  constructor() {
    this.galleryImages = [
      {
        imagePath: '/assets/36528651_1821240804581446_3113195138856255488_n.jpg',
        imageTitle: 'Sly'
      },
      {
        imagePath: '/assets/36538527_1821240484581478_6106776151483482112_n.jpg',
        imageTitle: 'Sly & Essie'
      },
      {
        imagePath: '/assets/36568028_1821240261248167_8176343625240674304_n.jpg',
        imageTitle: 'Sly & Essie'
      },
      {
        imagePath: '/assets/36598122_1821240881248105_2572947252985200640_n.jpg',
        imageTitle: 'Essie'
      },
      {
        imagePath: '/assets/36611244_1821239947914865_3801176847304097792_n.jpg',
        imageTitle: 'Essie'
      },
      {
        imagePath: '/assets/36618926_1821239914581535_3049740493161234432_n.jpg',
        imageTitle: 'Sly'
      },
      {
        imagePath: '/assets/36622904_1821240091248184_4078363647062048768_n.jpg',
        imageTitle: 'Sly & Essie'
      },
      {
        imagePath: '/assets/36636830_1821240851248108_8980089885025107968_n.jpg',
        imageTitle: 'Sly'
      }
    ];
  }

  ngOnInit(): void {
  }

}
