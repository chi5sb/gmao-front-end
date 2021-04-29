import { MembreEquipe } from './../../controller/model/membre-equipe.model';
import { Equipe } from './../../controller/model/equipe.model';
import { EquipesService } from './../../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-create',
  templateUrl: './equipe-create.component.html',
  styleUrls: ['./equipe-create.component.css']
})
export class EquipeCreateComponent implements OnInit {


  constructor(private equipeService:EquipesService) { }

  get equipe(): Equipe {
    return this.equipeService.equipe;
  }
  get membre(): MembreEquipe {
    return this.equipeService._membre;
  }
  ngOnInit(): void {
  }
  
}
