import { Component, Input } from '@angular/core';
import { Post } from '../../../../core/models/post.models';
import { IconComponent } from '../../../../shared/components/icons/icon.component';
import { CommonModule } from '@angular/common';
import { CutTextPipe } from '../../../../shared/pipes/cut-text.pipe';

@Component({
  selector: 'app-post',
  imports: [IconComponent, CommonModule, CutTextPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: Post;
}
