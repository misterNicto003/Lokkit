import { Component, Input } from '@angular/core';
import { IconComponent } from '../icons/icon.component';
import { RouterLink } from '@angular/router';
import { Post } from '../../../core/models/post.models';

@Component({
  selector: 'app-sidebar',
  imports: [IconComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() UserData!: Post[];
}
