import { Component, Input } from '@angular/core';
import { Post } from '../../../../core/models/post.models';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: Post;
}
