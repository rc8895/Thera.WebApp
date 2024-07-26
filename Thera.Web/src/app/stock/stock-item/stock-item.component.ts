import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {

  public stockName: string | undefined;
  public stockCode: string | undefined;

  ngOnInit(): void {
    this.stockName = "stock-item";
    this.stockCode = "stk_t";
  }

  protected readonly name = name;
}
