import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/controller/model/Stock.model';
import { StockService } from 'src/app/controller/service/stock-service.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  constructor(private stockService: StockService) { }
  get stock(): Stock {
    return this.stockService.stock;
  }


  ngOnInit(): void {
  }
  isupdateable() {
    // return this.stock.id != null;
  }
  public Save(){
     return this.stockService.save();
  }
  empty() {
  }

}
