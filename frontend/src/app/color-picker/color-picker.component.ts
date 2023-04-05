import {
  FormGroup,
  FormBuilder,
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';
import { Component, Input, OnInit, Attribute } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ColorPickerComponent implements OnInit {
  // store these colors in MongoDB and retrieve OnInit
  colors = new Map([
    ['Green', 'rgb(125,149,87)'],
    ['Olive Green', 'rgb(143,162,140'],
    ['Seablue', 'rgb(161,183,187)'],
    ['Blue Gray', 'rgb(126,148,162)'],
    ['Deep Blue', 'rgb(61,75,101)'],
    ['Cool Blue', 'rgb(18,61,78)'],
    ['Gray', 'rgb(107,108,112)'],
    ['Black', 'rgb(47,50,60)'],
    ['White', 'rgb(237,235,231)'],
    ['Dusty Rose', 'rgb(215,168,152)'],
    ['Beige', 'rgb(228,194,151)'],
    ['Yellow', 'rgb(212,185,98)'],
    ['Oak', 'rgb(198,121,61)'],
    ['Brown', 'rgb(129,73,42)'],
    ['Rich Wood', 'rgb(124,72,39)'],
  ]);

  @Input('bookmarkColor') bookmarkColor!: string;

  constructor(@Attribute('id') public id: string) {}

  ngOnInit(): void {}
}
