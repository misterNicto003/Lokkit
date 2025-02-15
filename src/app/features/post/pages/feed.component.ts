import { Component, inject } from '@angular/core';
import { PostComponent } from '../components/post/post.component';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-feed',
  imports: [PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  public postService = inject(PostService);
}
