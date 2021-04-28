import { Equipe } from './../../controller/model/equipe.model';
import { EquipesService } from './../../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  constructor(private equipeService:EquipesService) { }
  get equipes(): Array<Equipe> {
    return this.equipeService.equipes;
  }

  creerEquipe(){
    this.equipeService.creerEquipe();
  }

  ngOnInit(): void {
  }

}
