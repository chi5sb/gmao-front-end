import { Collaborateur } from './../../controller/model/collaborateur.model';
import { CollaborateurService } from './../../controller/service/collaborateur.service';
import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../controller/service/intervention.service';
import {InterventionMembreEquipe} from '../../controller/model/intervention-membre-equipe.model';

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

  get collaborateur(): InterventionMembreEquipe {
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
    this.collaborateur.membreEquipe.collaborateur.codeCollaborateur=$event.target.value;
  }
}
