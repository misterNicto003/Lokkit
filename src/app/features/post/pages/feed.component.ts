import { Component, inject, Input } from '@angular/core';
import { PostComponent } from '../components/post/post.component';
import { PostService } from '../../../core/services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [PostComponent, CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  public postService = inject(PostService);
}
