import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';
import { postsData } from '../postData';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Post[] = postsData;

  getPosts() {
    this.posts = postsData;
  }

  loadPost() {
    return this.posts.map((item) => {
      return {
        title: item.title,
        content: item.content,
      };
    });
  }

  public updatePost(data: any) {
    console.log('This post has been edited:', data);
  }

  likePost(postId: number) {
    this.posts = this.posts.map((post) =>
      post._id === postId ? { ...post, likes: post.likes + 1 } : post
    );

    console.log(this.posts);
  }

  deletePost(postId: number) {
    console.log(`Deleting post ${postId}`);
    this.posts = this.posts.filter((post) => post._id !== postId);
  }
}
