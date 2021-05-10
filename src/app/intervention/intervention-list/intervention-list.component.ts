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
  
  page= 1;
  pageSize= 5;
  collectionSize=this.interventionService.interventions.length
  code: string;
  ngOnInit(): void {
    this.interventionService.findAll();
  }

  get interventions(): Array<Intervention> {
    return this.interventionService.interventions;
  }
  get intervention(): Intervention {
    return this.interventionService.intervention;
  }
  get interventionVo(){
    return this.interventionService.interventionVo;
  }
  public deleteIntervention(index: number){
    this.interventions.splice(index, 1);
}
public update(index: number, intervention: Intervention){
  this.interventionService.update(index, intervention);
}
public findByCriteria(){
  this.interventionService.findByCriteria();
}
public openDialog() {
  this.interventionService.openDialog();
}
}
