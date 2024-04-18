import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dadosForm } from '../models/dadosForm';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.page.html',
  styleUrls: ['./form-cadastro.page.scss'],
})
export class FormCadastroPage implements OnInit {

  dadosFormulario : dadosForm = {
    nome: '',
    sexo: '',
    telefone: '',
    matricula: '',
    alunoBilingue: false,
    cursosTecnologia: [] as string[]
  };

  cursoHTML : boolean = false;
  cursoPHP : boolean = false;
  cursoCSharp : boolean = false;

  constructor(public rota : Router, public servico : DadosService) { }

  ngOnInit() {
  }

  salvar(form: NgForm){
    if(form.valid){
      
      if(this.cursoHTML){
        this.dadosFormulario.cursosTecnologia.push("HTML");
      }
      if(this.cursoPHP){
        this.dadosFormulario.cursosTecnologia.push("PHP");
      }
      if(this.cursoCSharp){
        this.dadosFormulario.cursosTecnologia.push("C#");
      }

      console.log("Dados preenchidos: " + JSON.stringify(this.dadosFormulario))

      //Chama o servico e o aciona
      this.servico.adicionarDados(this.dadosFormulario);

      this.resetFormulario();
      this.rota.navigate(['home'])

    }
  }

  resetFormulario(){
    this.dadosFormulario.nome = '';
    this.dadosFormulario.sexo = '';
    this.dadosFormulario.telefone = '';
    this.dadosFormulario.matricula = '';
    this.dadosFormulario.alunoBilingue = false;
    this.dadosFormulario.cursosTecnologia = [];
  }

  atualizarOpcao1(){
    this.cursoHTML = !this.cursoHTML;
  }

  atualizarOpcao2(){
    this.cursoPHP = !this.cursoPHP;
  }

  atualizarOpcao3(){
    this.cursoCSharp = !this.cursoCSharp;
  }
}
