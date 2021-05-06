import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/controller/model/Stock.model';
import { StockService } from 'src/app/controller/service/stock-service.service';
import {InterventionService} from '../../controller/service/intervention.service';
import {Intervention} from '../../controller/model/intervention.model';
import {MateraialIntervention} from '../../controller/model/materaial-intervention.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  constructor(private stockService: StockService,
              private interventionService: InterventionService) { }

  get intervention(): Intervention {
    return this.interventionService.intervention;
  }
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

  evaluate() {
    if (this.intervention.libelle == null){
      this.Save();
    }
    else {
      const materialintervention = new MateraialIntervention();
      materialintervention.material = this.stock.material;
      materialintervention.magasin = this.stock.magasin;
      this.interventionService.materialIntervention = materialintervention;
      this.interventionService.saveStock();
    }

  }
}
