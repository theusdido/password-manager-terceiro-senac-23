import { Injectable } from '@angular/core';
import { Credencial } from './credencial';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public dados:Array<Credencial> = [];
  constructor() { }

  carregar(){
    this.dados = JSON.parse(String(localStorage.getItem('dados')));
  }

  excluir(indice:number){
      // O comando splice exclui um item da Array
      this.dados.splice(indice,1);
      // Atualiza a lista no localStorage
      localStorage.setItem('dados',JSON.stringify(this.dados));
  }

  salvar(credencial:Credencial){
    this.dados.push(credencial);
    localStorage.setItem('dados',JSON.stringify(this.dados)); 
  }
}
