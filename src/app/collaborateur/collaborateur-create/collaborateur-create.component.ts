import { Collaborateur } from './../../controller/model/collaborateur.model';
import { CollaborateurService } from './../../controller/service/collaborateur.service';
import { MembreEquipe } from './../../controller/model/membre-equipe.model';
import { EquipesService } from './../../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../controller/service/intervention.service';
import {CollaborateurListComponent} from '../collaborateur-list/collaborateur-list.component';
import {InterventionCollaborateur} from '../../controller/model/intervention-collaborateur.model';

@Component({
  selector: 'app-collaborateur-create',
  templateUrl: './collaborateur-create.component.html',
  styleUrls: ['./collaborateur-create.component.css'],
})
export class CollaborateurCreateComponent implements OnInit {
  constructor(private collaborateurService: CollaborateurService,private interventionService:InterventionService) {}

  // get collaborateur(): Collaborateur {
  //   return this.collaborateurService.collaborateur;
  // }
  //
  // get collaborateurs(): Array<Collaborateur> {
  //   return this.collaborateurService.collaborateurs;
  // }

  get collaborateur(): InterventionCollaborateur {
    return this.interventionService.collaborateur;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }
  selected: string = '';
  // public addMembres() {
  //   this.equipesService.addMembres();
  // }

  // get membre(): MembreEquipe {
  //   return this.equipesService.membre;
  // }

  ngOnInit(): void {
    this.collaborateurService.findAll();

  }

  saveCollaboraateur() {
    this.interventionService.saveCollaboraateur();
  }


  isSelected($event: any) {
    this.collaborateur.collaborateur.codeCollaborateur=$event.target.value;
  }
}
