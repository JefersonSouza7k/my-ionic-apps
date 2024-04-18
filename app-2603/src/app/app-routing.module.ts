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
    path: 'form-cadastrar-aluno',
    loadChildren: () => import('./form-cadastrar-aluno/form-cadastrar-aluno.module').then( m => m.FormCadastrarAlunoPageModule)
  },
  {
    path: 'form-visualizar-dados',
    loadChildren: () => import('./form-visualizar-dados/form-visualizar-dados.module').then( m => m.FormVisualizarDadosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
