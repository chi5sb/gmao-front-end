import { Component, OnInit } from '@angular/core';
import {Stock} from '../../controller/model/Stock.model';
import {StockService} from '../../controller/service/stock-service.service';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private stockService: StockService) {
  }
  get stocks(): Array<Stock> {
    return this.stockService.stocks;
  }

  ngOnInit(): void {
    this.stockService.findAll();
  }

  delete(i: number, reference: string, reference2: string) {

  }

  update(i: number, c: Stock) {

  }
}
