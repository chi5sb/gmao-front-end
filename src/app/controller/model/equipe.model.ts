import { MembreEquipe } from './membre-equipe.model';
export class Equipe {
 public id : number;
 public libelle : string;
 public ref: string ;
 public membres : Array<MembreEquipe>;
 public chefEquipe : MembreEquipe;
}
