import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ListarSitePage } from '../listar-site/listar-site.page';

export interface Credencial {
  site:string,
  login:string,
  senha:string
}

@Component({
  selector: 'app-cadastro-site',
  templateUrl: './cadastro-site.page.html',
  styleUrls: ['./cadastro-site.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroSitePage implements OnInit {

  public site: string = '';
  public login: string = '';
  public senha: string = '';
  public dados:Array<Credencial> = [];
  public type_senha:string = 'password';
  public icon_senha:string = 'eye';

  isAlertOpen = false;
  public alertButtons = ['OK'];
  constructor(
    public activated_route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activated_route.params
    .subscribe((params:any) => {
      if (params.dados != undefined){
        this.carregar(params.dados);
      }
    })
  }

  salvar() {
    // Código para criptografar a senha
    // Usando Base64    
    let credencial:Credencial = {
      site:this.site,
      login:this.login,
      senha:btoa(this.senha)
    };
    this.dados.push(credencial);
    localStorage.setItem('dados',JSON.stringify(this.dados)); 
    this.setOpen(true);
  } 

  carregar(registro:any){
    let dados   = JSON.parse(registro);
    this.site   = dados.site;
    this.login  = dados.login;
    this.senha  = atob(dados.senha);
  }

  limpar(){
    localStorage.clear();
    this.site   = '';
    this.login  = '';
    this.senha  = '';

  }

  showSenha(){
    if (this.type_senha == 'password'){
      this.type_senha = 'text';
      this.icon_senha = 'eye-off';
    }else{
      this.type_senha = 'password';
      this.icon_senha = 'eye';
    } 
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}