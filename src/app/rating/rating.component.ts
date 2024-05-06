import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input()
  rating!: number;
  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }

}
