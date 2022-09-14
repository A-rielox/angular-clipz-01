import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
   selector: 'app-modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.css'],
   // providers: [ModalService],
})
export class ModalComponent implements OnInit {
   @Input() modalID = '';

   constructor(public modal: ModalService, public el: ElementRef) {
      // console.log(el);
      // ElementRef {nativeElement: app-modal}
      // me entrega el host-element, q en este caso es el app-modal ( EL WRAPPER Q TIENE ESTE COMPONENTE EN EL DOM )
   }

   ngOnInit(): void {
      // MUEVO ESTE COMPONENTE AL BODY
      document.body.appendChild(this.el.nativeElement);
   }

   // el elemento es destruido por el *ngIf del <app-modal en app.component.html, pero no removido del DOM, para esto
   ngOnDestroy() {
      document.body.removeChild(this.el.nativeElement);
   }

   closeModal() {
      this.modal.toggleModal(this.modalID);
   }
}

// ElementRef --> para poder sacar el modal de la parte del DOM en q esta y pasarla directo bajo el body del DOM y asi q no le afecte el css del parent
