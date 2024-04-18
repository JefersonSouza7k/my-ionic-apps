import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  abrirFormulario(){
    this.route.navigate(['../form-cadastrar-aluno']);
  }

  visualizarDados(){
    this.route.navigate(['../form-visualizar-dados'])
  }


}
