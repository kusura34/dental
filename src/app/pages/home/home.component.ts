import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { images } from '../../data/images-data';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
public currentIndex: number = 0;

images = images;

// goTo(index: number) {
//   this.currentIndex = index;
// }

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
