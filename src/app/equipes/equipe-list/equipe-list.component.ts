import { Equipe } from './../../controller/model/equipe.model';
import { EquipesService } from './../../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {
  panelOpenState = false;

  constructor(private equipeService:EquipesService) { }
  get equipes(): Array<Equipe> {
    return this.equipeService.equipes;
  }
  public delete(index: number){
    this.equipes.splice(index, 1);
}
  public update(index: number, equipe: Equipe){
    this.equipeService.update(index, equipe);
  }
  ngOnInit(): void {
  }
  get equipeSelect(): Equipe {
    return  this.equipeService.equipeSelect;
  }
  public findByEquipeRef(equipe: Equipe){
    this.equipeService.findByEquipeRef(equipe);
}
}
