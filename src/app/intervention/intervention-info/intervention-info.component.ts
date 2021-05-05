import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../controller/service/intervention.service';
import {Intervention} from '../../controller/model/intervention.model';

@Component({
  selector: 'app-intervention-info',
  templateUrl: './intervention-info.component.html',
  styleUrls: ['./intervention-info.component.css']
})
export class InterventionInfoComponent implements OnInit {

  constructor(private interventionService:InterventionService) { }

  get intervention(): Intervention {
    return this.interventionService.intervention;
  }

  get interventions(): Array<Intervention> {
    return this.interventionService.interventions;
  }

  ngOnInit(): void {
  }

}
