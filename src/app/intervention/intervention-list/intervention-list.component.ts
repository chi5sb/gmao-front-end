import { Intervention } from './../../controller/model/intervention.model';
import { InterventionService } from './../../controller/service/intervention.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css'],
})
export class InterventionListComponent implements OnInit {
  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.interventionService.findAll();
  }

  get interventions(): Array<Intervention> {
    return this.interventionService.interventions;
  }
   public delete(index: number){
    this.interventions.splice(index, 1);
}
public update(index: number, intervention: Intervention){
  this.interventionService.update(index, intervention);
}
}
