import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {ModalComponent} from "../modal/modal.component";
// import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ModalComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  @ViewChild('myElement') myElement: ElementRef<HTMLDivElement> | undefined;

  isLoggedIn: boolean = false;
  showLoginPage:  boolean = false;

  showModal() {
    this.showLoginPage = true;
  }

  ngAfterViewInit() {
    //  this.myElement.nativeElement.draggable = 'none';
    //
    //  $modal.draggable({
    //    handle: ".modal-header",
    //  });
    // $modal.resizable();
  }

  closeModal() {
    this.showLoginPage = false;
  }
}
