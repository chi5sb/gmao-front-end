import { Intervention } from './../../controller/model/intervention.model';
import { InterventionService } from './../../controller/service/intervention.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intervention-create',
  templateUrl: './intervention-create.component.html',
  styleUrls: ['./intervention-create.component.css'],
})
export class InterventionCreateComponent implements OnInit {
  constructor(private interventionService: InterventionService) {}
  ngOnInit(): void {}

  modeVue = '';

  get intervention(): Intervention {
    return this.interventionService.intervention;
  }

  changeVue(vue: string) {
    this.modeVue = vue;
  }

  save() {
    this.interventionService.saveIntervention();
  }
}
