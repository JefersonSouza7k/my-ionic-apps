import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listar-dados',
    loadChildren: () => import('./listar-dados/listar-dados.module').then( m => m.ListarDadosPageModule)
  },
  {
    path: 'visualizar-dados-objeto',
    loadChildren: () => import('./visualizar-dados-objeto/visualizar-dados-objeto.module').then( m => m.VisualizarDadosObjetoPageModule)
  },
  {
    path: 'form-cadastro',
    loadChildren: () => import('./form-cadastro/form-cadastro.module').then( m => m.FormCadastroPageModule)
  },
  {
    path: 'editar-obj',
    loadChildren: () => import('./editar-obj/editar-obj.module').then( m => m.EditarObjPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
