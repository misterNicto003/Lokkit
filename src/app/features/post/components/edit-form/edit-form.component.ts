import { Component, inject } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icons/icon.component';
import { PostService } from '../../../../core/services/post.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  imports: [IconComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss',
})
export class EditFormComponent {
  private postService = inject(PostService);

  get titleControl() {
    return this.postForm.get('title');
  }

  get contentControl() {
    return this.postForm.get('content');
  }

  public postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(300),
    ]),
    image: new FormControl(null),
    tags: new FormArray([]),
  });

  // addtags(tags: string) {
  //   (this.postForm.get('tags') as FormArray).push(
  //     new FormControl('tag', Validators.required)
  //   );
  // }

  get tags() {
    return this.postForm.get(['tags']) as FormArray;
  }

  addTag() {
    this.tags.push(new FormControl('', Validators.required));
  }

  deleteTag(i: number) {
    this.tags.removeAt(i);
  }
  onSubmit() {
    if (this.postForm.valid) {
      this.postService.updatePost(this.postForm.value);
      console.log(this.postForm.value);
    }
  }
}
