import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StockItemComponent} from "./stock/stock-item/stock-item.component";
import {LoginComponent} from "./login/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StockItemComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Thera.Web';
}
