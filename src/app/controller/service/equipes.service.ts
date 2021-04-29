import { EquipeCreateComponent } from './../../equipes/equipe-create/equipe-create.component';
import { MembreEquipe } from './../model/membre-equipe.model';
import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  public _equipe: Equipe; 
  public _equipes : Array<Equipe>;
  public _membre : MembreEquipe;

  constructor(private diag : MatDialog
    ) { }
  
  get equipe(): Equipe {
    if (this._equipe == null){
      this._equipe = new Equipe();
    }
    return this._equipe;
  }
  set equipe(value: Equipe) {
    this._equipe = value;
  }

  get equipes(): Array<Equipe> {
    if (this._equipes == null){
      this._equipes = new Array<Equipe>();
    }
    return this._equipes;
  }
  set equipes(value: Array<Equipe>) {
    this._equipes = value;
  }

  get membre(): MembreEquipe {
    if (this._membre == null){
      this._membre = new MembreEquipe();
    }
    return this._membre;
  }
  set membre(value: MembreEquipe) {
    this._membre = value;
  }

  creerEquipe() : void{
    const diagConfig = new MatDialogConfig();
    diagConfig.width= "60%";
    diagConfig.autoFocus = true;
    
    this.diag.open(EquipeCreateComponent,diagConfig);

  }

  
}
