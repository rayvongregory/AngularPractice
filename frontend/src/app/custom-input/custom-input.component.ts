import {
  FormGroup,
  FormBuilder,
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';
import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class CustomInputComponent implements OnInit {
  @Input('label') label!: string;
  @Input('bookmarkName') bookmarkName!: string;
  @Input('bookmarkUrl') bookmarkUrl!: string;
  // @Input() for = '';
  // @Input() id = '';
  // @Input() name = '';
  // @Input() url = '';

  constructor(@Attribute('id') public id: string) {}

  ngOnInit(): void {}

  handleFloat(e: Event) {
    const eventType = e.type;
    const input = e.target as HTMLElement;
    const value = (input as HTMLInputElement).value.trim();
    const label = (input as HTMLElement).previousElementSibling;
    const floating = label?.classList.contains('float');
    if (
      (eventType === 'focus' && !floating) ||
      (eventType === 'blur' && !value && floating)
    ) {
      label?.classList.toggle('float');
      input?.classList.toggle('float');
    }
  }
}
