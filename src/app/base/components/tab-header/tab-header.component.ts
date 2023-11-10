import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft,faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tab-header.component.html',
  styleUrl: './tab-header.component.scss'
})
export class TabHeaderComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronLeft,
      faEllipsisV
    )
  }
}
