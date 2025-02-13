import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';

@Component({
  selector: 'app-feature-feed',
  imports: [PostComponent],
  templateUrl: './feature-feed.component.html',
  styleUrl: './feature-feed.component.scss',
})
export class FeatureFeedComponent {}
