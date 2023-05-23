import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Credencial } from '../cadastro-site/cadastro-site.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-site',
  templateUrl: './listar-site.page.html',
  styleUrls: ['./listar-site.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListarSitePage implements OnInit {

  public dados:Array<Credencial> = [];
  public type_senha:string = 'password';
  public icon_senha:string = 'eye-off';
  public alertButtons = [
    {
      text: 'Não',
      cssClass: 'alert-button-cancel',
      role:false
    },
    {
      text: 'Sim',
      cssClass: 'alert-button-confirm',
      role:true
    },
  ];
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.carregar();
  }

  carregar(){
    this.dados = JSON.parse(String(localStorage.getItem('dados')));
  }

  showSenha(){
    if (this.type_senha == 'password'){
      this.type_senha = 'text';
      this.icon_senha = 'eye';
    }else{
      this.type_senha = 'password';
      this.icon_senha = 'eye-off';
    } 
  }  

  descripto(senha:string){
    return atob(senha);
  }

  excluir(evento:any,indice:number){

    if (evento.detail.role){
      // O comando splice exclui um item da Array
      this.dados.splice(indice,1);
      // Atualiza a lista no localStorage
      localStorage.setItem('dados',JSON.stringify(this.dados));
    }
  }

  editar(registro:any){
    this.router.navigate(['/cadastro-site',{dados:JSON.stringify(registro)}]);
  }

  goCadastro(){
    this.router.navigateByUrl('/cadastro-site');
  }
  
}