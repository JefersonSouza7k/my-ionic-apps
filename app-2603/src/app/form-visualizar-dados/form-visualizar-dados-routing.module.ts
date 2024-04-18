import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormVisualizarDadosPage } from './form-visualizar-dados.page';

const routes: Routes = [
  {
    path: '',
    component: FormVisualizarDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormVisualizarDadosPageRoutingModule {}
