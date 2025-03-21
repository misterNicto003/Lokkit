import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../../../../shared/shared';

@Component({
  selector: 'app-devices',
  imports: [InputComponent],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  form = new FormGroup({
    customInput: new FormControl('Initial Value'),
  });
}
