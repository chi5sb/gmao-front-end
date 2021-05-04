import { MembreEquipe } from './../controller/model/membre-equipe.model';
import { EquipesService } from './../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membre-equipe',
  templateUrl: './membre-equipe.component.html',
  styleUrls: ['./membre-equipe.component.css'],
})
export class MembreEquipeComponent implements OnInit {
  constructor(private equipesService: EquipesService) {}
  public addMembres() {
    this.equipesService.addMembres();
  }

  get membre(): MembreEquipe {
    return this.equipesService.membre;
  }
  ngOnInit(): void {}
}
