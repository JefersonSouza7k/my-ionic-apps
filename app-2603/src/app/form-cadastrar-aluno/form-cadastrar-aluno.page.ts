import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../service/dados.service';

@Component({
  selector: 'app-form-cadastrar-aluno',
  templateUrl: './form-cadastrar-aluno.page.html',
  styleUrls: ['./form-cadastrar-aluno.page.scss'],
})
export class FormCadastrarAlunoPage implements OnInit {

  cadastro = {
    nome: '',
    genero: '',
    telefone: '',
    matricula: '',
    aluno_bilingue: false,
    curso_tec: [] 
  };

  constructor(public dados : DadosService, public route : Router) { }

  salvar(form: NgForm){
    if(form.valid){
      //adiciona os dados do formulário ao array de dados armazenados
      console.log("Dados do Cadastro: ", this.cadastro);
      this.dados.adicionarDados(this.cadastro);
      

      //limpa o formulario após salvar
      this.limpaFormulario();
      this.route.navigate(['/home'])
    } else {
      console.error('Formulário inválido. Verifique os campos');
    }
  }

  limpaFormulario(){
    this.cadastro.nome = '';
    this.cadastro.genero = '';
    this.cadastro.telefone = '';
    this.cadastro.matricula = '';
    this.cadastro.aluno_bilingue = false;
    this.cadastro.curso_tec = [];
  }
  
  ngOnInit() {
  }

}
