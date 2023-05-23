import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cadastro-site',
    loadComponent: () => import('./cadastro-site/cadastro-site.page').then( m => m.CadastroSitePage)
  },
  {
    path: 'listar-site',
    loadComponent: () => import('./listar-site/listar-site.page').then( m => m.ListarSitePage)
  },  
];
