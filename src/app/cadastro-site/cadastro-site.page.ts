import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Credencial } from '../credencial';
import { DatabaseService } from '../database.service';

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
  public erro_site = '';
  public erro_login = '';
  public erro_senha = '';
  public campo_error = '';

  isAlertOpen = false;
  alert_validar = false;
  public alertButtons = ['OK'];
  constructor(
    public activated_route:ActivatedRoute,
    public database:DatabaseService
  ) { }

  ngOnInit() {
    this.database.carregar();
    this.activated_route.params
    .subscribe((params:any) => {
      if (params.dados != undefined){
        this.carregar(params.dados);
      }
    })
  }

  salvar() {
    this.erro_site  = '';
    this.erro_login = '';
    this.erro_senha = '';

    if (this.site == ''){
      this.setOpenValidar('site');
      this.erro_site = 'campo-erro';
      return;
    }

    if (this.login == ''){
      this.setOpenValidar('login');
      this.erro_login = 'campo-erro';
      return;
    }

    if (this.senha == ''){
      this.setOpenValidar('senha');
      this.erro_senha = 'campo-erro';
      return;
    }

    // Código para criptografar a senha
    // Usando Base64    
    let credencial:Credencial = {
      site:this.site,
      login:this.login,
      senha:btoa(this.senha)
    };

    this.database.salvar(credencial)
    this.setOpen(true);
    this.limpar();
  } 

  carregar(registro:any){
    let dados   = JSON.parse(registro);
    this.site   = dados.site;
    this.login  = dados.login;
    this.senha  = atob(dados.senha);
  }

  limpar(){
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

  setOpenValidar(campo:string){
    this.alert_validar = true;
    this.campo_error = campo;
  }
  setCloseValidar(){
    this.alert_validar = false;
  }
}