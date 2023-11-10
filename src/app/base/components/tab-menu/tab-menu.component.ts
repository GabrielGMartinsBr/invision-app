import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faDollarSign, faEllipsisH, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss'
})
export class TabMenuComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBox,
      faDollarSign,
      faPenToSquare,
      faUser,
      faUsers,
      faEllipsisH
    );
  }

}
