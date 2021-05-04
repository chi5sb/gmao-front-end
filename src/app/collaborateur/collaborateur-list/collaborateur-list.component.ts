import { MembreEquipe } from './../../controller/model/membre-equipe.model';
import { EquipesService } from './../../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateur-list',
  templateUrl: './collaborateur-list.component.html',
  styleUrls: ['./collaborateur-list.component.css']
})
export class CollaborateurListComponent implements OnInit {

  constructor(private equipesService:EquipesService) { }

  get membre(): MembreEquipe {
    return this.equipesService.membre;
  }

  ngOnInit(): void {
  }

}
