import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() modalClosed = new EventEmitter<void>();

  closeModal(){
    this.modalClosed.emit();
  }
}
