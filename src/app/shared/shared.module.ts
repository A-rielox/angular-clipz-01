import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

// import { ModalService } from '../services/modal.service';

@NgModule({
   declarations: [ModalComponent],
   imports: [CommonModule],
   exports: [ModalComponent],
   // providers es un array de services ( este ( el ModalServices ) es como el context y lo quiero disponible a los q esten en Shared )
   // providers: [ModalService],
})
export class SharedModule {}
