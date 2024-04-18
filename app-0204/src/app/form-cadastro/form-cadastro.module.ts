import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCadastroPageRoutingModule } from './form-cadastro-routing.module';

import { FormCadastroPage } from './form-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCadastroPageRoutingModule
  ],
  declarations: [FormCadastroPage]
})
export class FormCadastroPageModule {}
