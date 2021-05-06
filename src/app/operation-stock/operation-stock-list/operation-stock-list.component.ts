import { Component, OnInit } from '@angular/core';
import {OperationstockService} from '../../Controller/Service/operationstock.service';
import {StockService} from '../../controller/service/stock-service.service';
import {OperationStock} from '../../controller/model/operationStock.model';
import {Stock} from '../../controller/model/Stock.model';


@Component({
  selector: 'app-operation-stock-list',
  templateUrl: './operation-stock-list.component.html',
  styleUrls: ['./operation-stock-list.component.css']
})
export class OperationStockListComponent implements OnInit {

  reference: string;


  constructor(private stockService: StockService, private operationStockservice: OperationstockService) { }
  ngOnInit(): void {
    this.operationStockservice.findAll();
  }
  get operationstocks(): Array<OperationStock> {

   return  this.operationStockservice.operationstocks;
  }
  get operationstock(): OperationStock {
    return this.operationStockservice.operationstock;
  }
  get stocks(): Array<Stock> {

    return this.stockService.stocks;
  }
  get stock(): Stock {

    return this.stockService.stock;
  }
  delete(i: number, reference: any, ref: string) {

  }

  update(i: number, c: OperationStock) {

  }


  find(reference: String) {
    this.operationStockservice.find(reference);
  }

}
