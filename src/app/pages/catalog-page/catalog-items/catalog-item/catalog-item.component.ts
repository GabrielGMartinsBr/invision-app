import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CatalogItem } from './types';

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss'
})
export class CatalogItemComponent {
  @Input({ required: true }) item!: CatalogItem;

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronDown
    );
  }

}
