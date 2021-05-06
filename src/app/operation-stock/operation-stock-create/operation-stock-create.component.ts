import { Component, OnInit } from '@angular/core';
import {OperationstockService} from '../../Controller/Service/operationstock.service';
import {OperationStock} from '../../controller/model/operationStock.model';

@Component({
  selector: 'app-operation-stock-create',
  templateUrl: './operation-stock-create.component.html',
  styleUrls: ['./operation-stock-create.component.css']
})
export class OperationStockCreateComponent implements OnInit {
  qteMin: number;
  qteMax:number;
  constructor(private operationStockservice: OperationstockService) { }

  ngOnInit(): void {
  }

  get operationstocks(): Array<OperationStock> {

    return  this.operationStockservice.operationstocks;
  }
  get operationstock(): OperationStock {
    return this.operationStockservice.operationstock;
  }

  save() {
    this.operationStockservice.save();

  }

  findbyCritere(qteMax: number, qteMin: number) {
    // this.operationStockservice.findByCritere(qteMax,qteMin);
  }
}
