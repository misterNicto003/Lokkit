import { Component, inject, Input } from '@angular/core';
import { Post } from '../../../../core/models/post.models';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../core/services/post.service';
import {
  AppShowDirective,
  CutTextPipe,
  HighlightDirective,
  IconComponent,
  RelativeDatePipe,
  UserNamePipePipe,
} from '../../../../shared/shared';

@Component({
  selector: 'app-post',
  imports: [
    IconComponent,
    CommonModule,
    CutTextPipe,
    RelativeDatePipe,
    HighlightDirective,
    AppShowDirective,
    UserNamePipePipe,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: Post;

  showComment = false;

  private postService = inject(PostService);

  likePost(postId: number) {
    this.postService.likePost(postId);
  }

  toggleComments() {
    this.showComment = !this.showComment;
  }
}
