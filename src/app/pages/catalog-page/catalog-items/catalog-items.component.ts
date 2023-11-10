import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CatalogItem } from './catalog-item/types';

@Component({
  selector: 'app-catalog-items',
  standalone: true,
  imports: [
    CommonModule,
    CatalogItemComponent
  ],
  templateUrl: './catalog-items.component.html',
  styleUrl: './catalog-items.component.scss'
})
export class CatalogItemsComponent {

  items: CatalogItem[] = [
    {
      name: 'Sony XBR-75X900F',
      desc: '75" Class HDR UHD Smart LED TV',
      img: 'https://thumbs.ielectro.es/product/med/97166.webp',
      price: 1503,
      percent: 43
    },
    {
      name: 'Acoustics LR8G',
      desc: '2-WAY INVISIBLE IN-WALL OR IN-CEILING SPEAKER',
      img: 'https://www.customht.com.au/cdn/shop/products/stealth-acoustics-invisible-speakers-lr3g-pair-36891590230274_400x.jpg?v=1646791656',
      price: 652,
      percent: 13
    }
  ]

}
