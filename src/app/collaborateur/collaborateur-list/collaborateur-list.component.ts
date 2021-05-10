import { Collaborateur } from './../../controller/model/collaborateur.model';
import { CollaborateurService } from './../../controller/service/collaborateur.service';
import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../controller/service/intervention.service';
import {Intervention} from '../../controller/model/intervention.model';

@Component({
  selector: 'app-collaborateur-list',
  templateUrl: './collaborateur-list.component.html',
  styleUrls: ['./collaborateur-list.component.css'],
})
export class CollaborateurListComponent implements OnInit {
  page= 1;
  pageSize= 5;
  collectionSize=this.interventionService.interventions.length
  code: string;
  constructor(private collaborateurService: CollaborateurService,private interventionService: InterventionService) {}

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }
  get interventions(): Array<Intervention> {
    return this.interventionService.interventions;
  }

  ngOnInit(): void {
    this.interventionService.findAll();
  }
}
