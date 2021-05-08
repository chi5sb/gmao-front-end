import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/controller/model/Stock.model';
import { StockService } from 'src/app/controller/service/stock-service.service';
import {InterventionService} from '../../controller/service/intervention.service';
import {Intervention} from '../../controller/model/intervention.model';
import {MateraialIntervention} from '../../controller/model/materaial-intervention.model';
import {MaterialService} from '../../controller/service/material.service';
import {Material} from '../../controller/model/material.model';
import {Magasin} from '../../controller/model/magasin.model';
import {MagasinService} from '../../controller/service/magasin.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  private selected: any;

  constructor(private stockService: StockService, private interventionService: InterventionService, private materialService: MaterialService, private  magasinService: MagasinService) { }

  get intervention(): Intervention {
    return this.interventionService.intervention;
  }
  get stock(): Stock {
    return this.stockService.stock;
  }
  get materials(): Array<Material>{
    return this.materialService.materials;
  }
  get magasins(): Array<Magasin>{
    return this.magasinService.magasins;
  }


  ngOnInit(): void {
    this.materialService.findAll();
    this.magasinService.findAll();
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
    if (this.intervention.code == null){
      this.Save();
    }
    else {
      const materialintervention = new MateraialIntervention();
      materialintervention.material = this.stock.material;
      materialintervention.magasin = this.stock.magasin;
      materialintervention.qte = this.stock.qte;
      this.interventionService.materialIntervention = materialintervention;
      this.interventionService.saveStock();
    }

  }
  isSelected($event: any) {
    this.stock.magasin.reference = $event.target.value;
  }

  isSelecte($event: any) {
    this.stock.material.reference = $event.target.value;
  }
}
