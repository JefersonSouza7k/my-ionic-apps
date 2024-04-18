import { Component, OnInit } from '@angular/core';
import { DadosService } from '../service/dados.service';

@Component({
  selector: 'app-form-visualizar-dados',
  templateUrl: './form-visualizar-dados.page.html',
  styleUrls: ['./form-visualizar-dados.page.scss'],
})
export class FormVisualizarDadosPage implements OnInit {

  dadosCadastrados : any[] = [];

  constructor(public dados : DadosService) { }

  ionViewWillEnter(){
    this.listarDados();
  }

  ngOnInit() {
  }

  listarDados(){
    this.dadosCadastrados = this.dados.visualizarDados();
    //console.log("dados visualizar: "+this.dadosCadastrados)
  }

}
