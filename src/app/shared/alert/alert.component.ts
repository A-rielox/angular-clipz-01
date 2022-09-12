import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-alert',
   templateUrl: './alert.component.html',
   styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
   @Input() color = 'blue';

   get bgColor() {
      return `bg-${this.color}-400`;
      // para q tailwind se pueda ocupar con este tipo de expresiones hay q agregar a config de tailwind ( tailwind.config.js )
      // safelist: ['bg-blue-400', 'bg-green-400', 'bg-red-400'],
   }

   constructor() {}

   ngOnInit(): void {}
}
