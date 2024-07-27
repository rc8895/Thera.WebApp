import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {ModalComponent} from "../modal/modal.component";
// import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ModalComponent,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  isLoggedIn: boolean = false;
  showLoginPage:  boolean = false;

  constructor() {  }

  ngOnInit() {  }

  displayText(){
    return this.isLoggedIn ? "Logged In" : "Sign In"
  }

  displayClasses(){
    return {
      "btn": true,
      "btn-primary": !this.isLoggedIn,
      "btn-outline-primary": this.isLoggedIn,
    }
  }

  showModal() {
    this.showLoginPage = true;
  }

  closeModal() {
    this.showLoginPage = false;
  }

  sendLogin() {
    this.isLoggedIn = true;
    this.closeModal();
  }
}
