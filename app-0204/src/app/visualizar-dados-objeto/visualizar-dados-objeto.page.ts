import { Component, OnInit } from '@angular/core';
import { dadosForm } from '../models/dadosForm';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';


@Component({
  selector: 'app-visualizar-dados-objeto',
  templateUrl: './visualizar-dados-objeto.page.html',
  styleUrls: ['./visualizar-dados-objeto.page.scss'],
})
export class VisualizarDadosObjetoPage implements OnInit {

  posicao : number = 0;
  objRetornado!: dadosForm;


  constructor(public parametroRota : ActivatedRoute, public servico : DadosService) { }

  ngOnInit() {

    this.parametroRota.params.subscribe(
      (data:any) => {
        this.posicao = data.posicao;
        this.objRetornado = this.servico.retornarObjViaPosicao(this.posicao)
      }
    )

  }

}
