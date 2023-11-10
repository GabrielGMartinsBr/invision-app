import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  active = false;
  menuItems = [
    'Add Labor Item',
    'Add Custom Item',
    'Add Part',
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPlus
    );
  }

  toggle(evt: MouseEvent) {
    evt.stopPropagation();
    this.active = !this.active;
  }

  @HostListener('window:click')
  handleClick() {
    if (this.active) {
      this.active = false;
    }
  }

}
