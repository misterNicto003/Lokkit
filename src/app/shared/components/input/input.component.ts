import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';
import { IconComponent } from '../icons/icon.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: 'input.component.html',
  styleUrl: 'input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() iconType: string = '';
  @Input() showIcon: boolean = true;
  @Input() initiallyInactive: boolean = true;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputElement') inputElement!: ElementRef;
  @Input() errors: { [key: string]: boolean } | null = null;

  isActive: boolean = false;
  valueSignal = signal<string>('');
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private hostEl: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const hostAttributes = this.hostEl.nativeElement.attributes;

    const inputEl = this.hostEl.nativeElement.querySelector('input');

    for (let i = 0; i < hostAttributes.length; i++) {
      const attr = hostAttributes[i];

      if (
        attr.name.startsWith('_ngcontent') ||
        attr.name === 'class' ||
        attr.name === 'style'
      ) {
        continue;
      }

      this.renderer.setAttribute(inputEl, attr.name, attr.value);
    }
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.valueSignal.set(value);
    this.onChange(value);
    // console.log();
  }

  writeValue(value: string): void {
    this.valueSignal.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onBlur(): void {
    this.onTouched();
  }

  onIconClick(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      if (this.isActive) {
        this.inputElement.nativeElement.focus();
      }
    } else {
      this.inputElement.nativeElement.blur();
    }
  }
}
