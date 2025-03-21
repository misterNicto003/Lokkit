import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components/post/post.component';
import { FrameComponent } from '../../../../shared/shared';
import { PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-feed',
  imports: [PostComponent, CommonModule, FrameComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  public postService = inject(PostService);
}
