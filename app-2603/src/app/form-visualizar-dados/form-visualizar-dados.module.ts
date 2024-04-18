import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormVisualizarDadosPageRoutingModule } from './form-visualizar-dados-routing.module';

import { FormVisualizarDadosPage } from './form-visualizar-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormVisualizarDadosPageRoutingModule
  ],
  declarations: [FormVisualizarDadosPage]
})
export class FormVisualizarDadosPageModule {}
