import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupItem } from './pop-up.types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule, RouterLink],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  @Input() popUpItems!: PopupItem[];

  showPopup = false;

  ngOnInit() {
    console.log(this.popUpItems);
  }
}
