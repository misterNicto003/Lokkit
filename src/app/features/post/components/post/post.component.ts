import { Component, inject, Input } from '@angular/core';
import { Post } from '../../../../core/models/post.models';
import { IconComponent } from '../../../../shared/components/icons/icon.component';
import { CommonModule } from '@angular/common';
import { CutTextPipe } from '../../../../shared/pipes/cut-text.pipe';
import { PostService } from '../../../../core/services/post.service';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';
import { AppShowDirective } from '../../../../shared/directives/app-show-if-liked.directive';

@Component({
  selector: 'app-post',
  imports: [
    IconComponent,
    CommonModule,
    CutTextPipe,
    HighlightDirective,
    AppShowDirective,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: Post;

  showComment = true;

  private postService = inject(PostService);

  likePost(postId: number) {
    this.postService.likePost(postId);
  }

  toggleComments() {
    this.showComment = !this.showComment;
  }
}
