import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { images } from '../../data/images-data';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { safeImages } from '../../../../public/images/images-data';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
public currentIndex: number = 0;

showAll = false;

images = images;
safeImages = safeImages


get visibleImages() {
  return this.showAll ? this.safeImages : this.safeImages.slice(0, 2);
}

toggleImages() {
  this.showAll = !this.showAll;
}

next() {
  if (this.images.length > 0) {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}

prev() {
  if (this.images.length > 0) {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;
  }
}
}
