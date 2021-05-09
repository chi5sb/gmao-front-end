import { EtatIntervention } from './../model/etat-intervention.model';
import { MateraialIntervention } from './../model/materaial-intervention.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervention } from './../model/intervention.model';
import {StockService} from './stock-service.service';
import {Conseils} from '../model/conseils.model';
import { InterventionVo } from '../model/intervention-vo.model';
import {InterventionMembreEquipe} from '../model/intervention-membre-equipe.model';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {


  constructor(private http: HttpClient, private stockService: StockService) {}
  public _intervention: Intervention;
  public _interventions: Array<Intervention>;
  private _collaborateurs = this.intervention.interventionMembreEquipe;
  private _collaborateur: InterventionMembreEquipe;
  private _codeCollaborateur = this.collaborateur.membreEquipe.collaborateur.codeCollaborateur;
  private _materialInterventions = this.intervention.materaialInterventions;
  private _materialIntervention: MateraialIntervention;
  private _conseilIntervention: Conseils;
  private _conseilInterventions: Array<Conseils>;
  private urlBase = 'http://localhost:8036/Intervention-api/intervention';
  private _index: number;
  urlCriteria = 'http://localhost:8036/Intervention-api/intervention/criteria';
  public _interventionVo: InterventionVo;
  get conseilIntervention(): Conseils {
    if (this._conseilIntervention == null){
      this._conseilIntervention = new Conseils();
    }
    return this._conseilIntervention;
  }

  set conseilIntervention(value: Conseils) {
    this._conseilIntervention = value;
  }

  get conseilInterventions(): Array<Conseils> {
    if (this._conseilInterventions == null){
      this._conseilInterventions = new Array<Conseils>();
    }

    return this._conseilInterventions;
  }

  set conseilInterventions(value: Array<Conseils>) {
    this._conseilInterventions = value;
  }
  get interventionVo(): InterventionVo {
    if (this._interventionVo == null) {
      this._interventionVo = new InterventionVo();
    }
    return this._interventionVo;
  }

  set interventionVO(value: InterventionVo) {
    this._interventionVo = value;
  }
  get materialInterventions(): Array<MateraialIntervention> {
    if ( this._materialInterventions == null){
      this._materialInterventions = new Array<MateraialIntervention>();
    }
    return this._materialInterventions;
  }

  set materialInterventions(value: MateraialIntervention[]) {
    this._materialInterventions = value;
  }

  get materialIntervention(): MateraialIntervention {
    if ( this._materialIntervention == null){
      this._materialIntervention = new MateraialIntervention();
    }
    return this._materialIntervention;
  }

  set materialIntervention(value: MateraialIntervention) {
    this._materialIntervention = value;
  }
  get collaborateur(): InterventionMembreEquipe {
    if (this._collaborateur == null){
      // this._collaborateur.collaborateur = new Collaborateur();
      this._collaborateur = new InterventionMembreEquipe();
    }
    return this._collaborateur;
  }

  set collaborateur(value: InterventionMembreEquipe) {
    this._collaborateur = value;
  }

  private _materials: Array<MateraialIntervention>;
  private _etatIntervention: EtatIntervention;

  get collaborateurs(): Array<InterventionMembreEquipe> {
    if (this._collaborateurs == null){
      this._collaborateurs = new Array<InterventionMembreEquipe>();
    }
    return this._collaborateurs;
  }

  set collaborateurs(value: Array<InterventionMembreEquipe>) {
    this._collaborateurs = value;
  }

  get materials(): Array<MateraialIntervention> {
    if (this._materials == null){
      this._materials = new Array<MateraialIntervention>();
    }
    return this._materials;
  }

  set materials(value: Array<MateraialIntervention>) {
    this._materials = value;
  }

  get etatIntervention(): EtatIntervention {
    if (this._etatIntervention == null){
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
  public findByCriteria(){
    this.http.post<Array<Intervention>>(this.urlCriteria, this.interventionVo).subscribe(
      data => {
        this.interventions = data ;


      }, error => {
        console.log(error); }
    );
  }
  saveCollaboraateur() {
    this.collaborateur.intervention = this.intervention;
    this.collaborateurs.push(this._collaborateur);
    this._codeCollaborateur = this.collaborateur.membreEquipe.collaborateur.codeCollaborateur;
    console.log(this._codeCollaborateur);
    this._collaborateur = null;
  }
  saveStock(){
    this.materialIntervention.intervention = this.intervention;
    this.materialIntervention.collaborateur.codeCollaborateur = this._codeCollaborateur;
    this.materialInterventions.push(this._materialIntervention);
    this.stockService.stock = null;
    console.log(this._materialInterventions);
    // this.materialIntervention.push(this.materialIntervention);

  }
  saveConseil(){
    this.conseilIntervention.intervention = this.intervention;
    this.conseilIntervention.collaborateur.codeCollaborateur = this._codeCollaborateur;
    this.conseilInterventions.push(this._conseilIntervention);
    this.intervention.conseils = this.conseilInterventions;
    this._conseilIntervention = null;
    console.log(this._conseilInterventions);
    console.log(this.intervention);
  }
   getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  }

  // JSON.stringify(circularReference, getCircularReplacer());
  saveIntervention() {
    console.log(this.intervention)
    const stringifi = JSON.stringify(this.intervention, this.getCircularReplacer());

    this.http.post(this.urlBase + '/', JSON.parse(stringifi)).subscribe(
      data => {
        if (data < 0) {
          alert('one of the reference are not available');
        }
          else{
            console.log('success' + data);
          }
      }
    );
  }
  public update(index: number, intervention: Intervention) {
    this.intervention = this.intervention;
    this._index = index;
  }
  public findAll(){
    this.http.get<Array<Intervention>>(this.urlBase + '/').subscribe(
      data => {
        this.interventions = data ; }
      // }, error => {
      //   console.log(error); }
    );
  }
}
