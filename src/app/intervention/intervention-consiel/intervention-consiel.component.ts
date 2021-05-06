import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../controller/service/intervention.service';
import {Conseils} from '../../controller/model/conseils.model';

@Component({
  selector: 'app-intervention-consiel',
  templateUrl: './intervention-consiel.component.html',
  styleUrls: ['./intervention-consiel.component.css']
})
export class InterventionConsielComponent implements OnInit {

  constructor(private interventionService: InterventionService) { }

  ngOnInit(): void {
  }

  get conseilIntervention(): Conseils {
    return this.interventionService.conseilIntervention;
  }

  ajouter() {
    this.interventionService.saveConseil();
  }
}
