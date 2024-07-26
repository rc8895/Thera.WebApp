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
  public isUp : boolean = false;
  public isSelected : boolean = false;

  ngOnInit(): void {
    this.stockName = "stock-item";
    this.stockCode = "stk_t";
    this.isUp = false;
  }

  onMouseEnter() {
    this.isSelected = true;
  }

  onMouseLeave() {
    this.isSelected = false;
  }

  toggleStatus(){
    this.isUp = !this.isUp;
  }


}
