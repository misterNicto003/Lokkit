import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../../shared/shared';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-info-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './info-form.component.html',
  styleUrl: './info-form.component.scss',
})
export class InfoFormComponent {
  public profileInfoForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    username: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    story: new FormControl('', [Validators.maxLength(200)]),
  });
  onSubmit() {
    if (this.profileInfoForm.valid) {
      const formdata = this.profileInfoForm.value;

      console.log(formdata);
      this.profileInfoForm.patchValue({
        fullName: 'mister',
        username: 'nicto',
        city: 'magas',
        story: 'ihadun ahad.',
      });

      console.log(
        'Successfully updated profileInfo:',
        this.profileInfoForm.value
      );
    }
  }
}
