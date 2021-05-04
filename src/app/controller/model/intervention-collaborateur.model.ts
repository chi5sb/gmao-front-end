import { Intervention } from './intervention.model';
import { Collaborateur } from './collaborateur.model';
export class InterventionCollaborateur {
  public id: number;
  public collaborateur = new Collaborateur();
  public intervention = new Intervention();
}
