import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Output() modalClosed = new EventEmitter<void>();

  closeModal(){
    this.modalClosed.emit();
  }
}
