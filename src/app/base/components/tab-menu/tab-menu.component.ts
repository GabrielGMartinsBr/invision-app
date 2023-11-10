import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faDollarSign, faEllipsisH, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import { RouterModule } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss'
})
export class TabMenuComponent {
  items = [
    {
      text: 'Catalog',
      icon: ['fas', 'box'] as IconProp,
      route: '/catalog'
    },
    {
      text: 'Proposals',
      icon: ['far', 'pen-to-square'] as IconProp,
      route: '/proposals'
    },
    {
      text: 'People',
      icon: ['fas', 'users'] as IconProp,
      route: '/people'
    },
    {
      text: 'Payments',
      icon: ['fas', 'dollar-sign'] as IconProp,
      route: '/payments'
    },
    {
      text: 'More',
      icon: ['fas', 'ellipsis-h'] as IconProp,
      route: '/more'
    },
  ];

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