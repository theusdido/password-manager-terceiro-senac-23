import { Injectable } from '@angular/core';
import { Credencial } from './credencial';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public dados:Array<Credencial> = [];
  constructor() { }

  carregar(){
    let localstorage = localStorage.getItem('dados');
    if (localstorage != null){
      this.dados = JSON.parse(String(localstorage));
    }    
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
