import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervention } from './../model/intervention.model';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {
  constructor(private http: HttpClient) {}
  public _intervention: Intervention;
  public _interventions: Array<Intervention>;

  get intervention(): Intervention {
    if (this._intervention == null) {
      this._intervention = new Intervention();
    }
    return this._intervention;
  }

  set intervention(value: Intervention) {
    this._intervention = value;
  }

  get interventions(): Array<Intervention> {
    if (this._interventions == null) {
      this._interventions = new Array<Intervention>();
    }
    return this._interventions;
  }

  set interventions(value: Array<Intervention>) {
    this._interventions = value;
  }
}
