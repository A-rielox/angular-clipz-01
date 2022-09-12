import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
   selector: 'app-input',
   templateUrl: './input.component.html',
   styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
   @Input() control: FormControl = new FormControl();
   @Input() type = 'text';
   @Input() placeholder = '';
   @Input() format = '';

   constructor() {}

   ngOnInit(): void {}
}

// para q NgxMask no se aplique xdefault le paso un empty string
