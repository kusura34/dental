import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }
}
