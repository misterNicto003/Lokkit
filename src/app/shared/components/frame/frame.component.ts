import { Component } from '@angular/core';
import { IconComponent } from '../icons/icon.component';
import { UserNamePipePipe } from '../../shared';

@Component({
  selector: 'app-frame',
  imports: [IconComponent, UserNamePipePipe],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
})
export class FrameComponent {}
