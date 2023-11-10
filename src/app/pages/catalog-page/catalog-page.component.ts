import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemsComponent } from './catalog-items/catalog-items.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [
    CommonModule,
    CatalogItemsComponent
  ],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss'
})
export class CatalogPageComponent {

}
