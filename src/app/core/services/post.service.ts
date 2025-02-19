import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';
import { postsData } from '../postData';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Post[] = postsData;

  constructor() {}
}
