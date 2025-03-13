import { Component, inject } from '@angular/core';
import { EditFormComponent } from '../../components/edit-form/edit-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [EditFormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {}
