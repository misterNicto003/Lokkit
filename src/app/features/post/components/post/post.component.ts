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
import { PopupItem } from '../../../../shared/components/pop-up/pop-up.types';
import { PopUpComponent } from '../../../../shared/components/pop-up/pop-up.component';

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
    PopUpComponent,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: Post;
  private postService = inject(PostService);
  public popUpItems!: PopupItem[];
  showComment = false;

  ngOnInit() {
    this.popUpItems = [
      { label: 'edit', link: ['/post', this.post?._id, 'edit'] },
      { label: 'setting', link: ['/post', this.post?._id, 'setting'] },
      {
        label: 'delete',
        click: () => this.postService.deletePost(this.post._id),
      },
    ];

    console.log(this.popUpItems);
  }

  likePost(postId: number) {
    this.postService.likePost(postId);
  }

  toggleComments() {
    this.showComment = !this.showComment;
  }
}
