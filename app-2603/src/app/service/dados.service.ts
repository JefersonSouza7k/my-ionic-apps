import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dadosCadastrados : any[] = [];

  constructor() { }

  adicionarDados(dados : any){
    let dados1 = {
      nome: dados.nome,
      genero: dados.genero,
      telefone: dados.telefone,
      matricula: dados.matricula,
      aluno_bilingue: dados.aluno_bilingue,
      curso_tec: dados.curso_tec
    };

    //console.log("serviço add: ", dados1.nome);
    this.dadosCadastrados.push(dados1);
  }

  visualizarDados(){
    //console.log("Visualizar dados do serviço: ",this.dadosCadastrados)
    return this.dadosCadastrados;
  }
}
