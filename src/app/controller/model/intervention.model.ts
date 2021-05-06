import { InterventionCollaborateur } from './intervention-collaborateur.model';
import { EtatIntervention } from './etat-intervention.model';
import { MateraialIntervention } from './materaial-intervention.model';
import {Conseils} from './conseils.model';

export class Intervention {
  public id: number;
  public dateDeProbleme: Date;
  public dateDebut: Date;
  public dateFin: Date;
  public description: string;
  public libelle: string;
  public code: string;
  public etatIntervention = new EtatIntervention();
  public interventionCollaborateur = new Array<InterventionCollaborateur>();
  public materaialInterventions = new Array<MateraialIntervention>();
  public  conseils = new Array<Conseils>();
}
