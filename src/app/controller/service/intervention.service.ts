import { EtatIntervention } from './../model/etat-intervention.model';
import { MateraialIntervention } from './../model/materaial-intervention.model';
import { InterventionCollaborateur } from './../model/intervention-collaborateur.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervention } from './../model/intervention.model';
import {Collaborateur} from '../model/collaborateur.model';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {


  constructor(private http: HttpClient) {}
  public _intervention: Intervention;
  public _interventions: Array<Intervention>;
  private _collaborateurs = this.intervention.interventionCollaborateur;
  private _collaborateur: InterventionCollaborateur;
  private _codeCollaborateur = this.collaborateur.collaborateur.codeCollaborateur;
  private _materialInterventions = this.intervention.materaialInterventions;
  private _materialIntervention : MateraialIntervention;



  get materialInterventions(): MateraialIntervention[] {
    if ( this._materialInterventions = null){
      this._materialInterventions = new Array<MateraialIntervention>();
    }
    return this._materialInterventions;
  }

  set materialInterventions(value: MateraialIntervention[]) {
    this._materialInterventions = value;
  }

  get materialIntervention(): MateraialIntervention {
    if ( this._materialIntervention = null){
      this._materialIntervention = new MateraialIntervention();
    }
    return this._materialIntervention;
  }

  set materialIntervention(value: MateraialIntervention) {
    this._materialIntervention = value;
  }
  get collaborateur(): InterventionCollaborateur {
    if(this._collaborateur == null){
      // this._collaborateur.collaborateur = new Collaborateur();
      this._collaborateur = new InterventionCollaborateur();
    }
    return this._collaborateur;
  }

  set collaborateur(value: InterventionCollaborateur) {
    this._collaborateur = value;
  }

  private _materials: Array<MateraialIntervention>;
  private _etatIntervention: EtatIntervention;

  get collaborateurs(): Array<InterventionCollaborateur> {
    if(this._collaborateurs == null){
      this._collaborateurs = new Array<InterventionCollaborateur>();
    }
    return this._collaborateurs;
  }

  set collaborateurs(value: Array<InterventionCollaborateur>) {
    this._collaborateurs = value;
  }

  get materials(): Array<MateraialIntervention> {
    if(this._materials == null){
      this._materials = new Array<MateraialIntervention>();
    }
    return this._materials;
  }

  set materials(value: Array<MateraialIntervention>) {
    this._materials = value;
  }

  get etatIntervention(): EtatIntervention {
    if(this._etatIntervention == null){
      this._etatIntervention = new EtatIntervention();
    }
    return this._etatIntervention;
  }

  set etatIntervention(value: EtatIntervention) {
    this._etatIntervention = value;
  }

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

  saveCollaboraateur() {
    this.collaborateur.intervention = this.intervention;
    this.collaborateurs.push(this._collaborateur);
    console.log(this._collaborateurs)
    this._collaborateur = null;
  }
  saveStock(){
   return null;
    // this.materialIntervention.push(this.materialIntervention);

  }
  // save(intervention: Intervention){

  // };
}
