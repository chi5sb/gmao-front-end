import { Collaborateur } from './../../controller/model/collaborateur.model';
import { CollaborateurService } from './../../controller/service/collaborateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateur-list',
  templateUrl: './collaborateur-list.component.html',
  styleUrls: ['./collaborateur-list.component.css'],
})
export class CollaborateurListComponent implements OnInit {
  constructor(private collaborateurService: CollaborateurService) {}

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }

  ngOnInit(): void {
    this.collaborateurService.findAll();
  }
}
