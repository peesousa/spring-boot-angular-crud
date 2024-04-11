import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  cliente = new Cliente();

  mostrarBtn:boolean = true;

  clientes:Cliente[] = [];

  tabela:boolean = true;

  constructor(private servico:ClienteService){}

  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {
      this.clientes.push(retorno);
      this.cliente = new Cliente();
      alert('Cliente cadastrado com sucesso!');
    });
  }

  selecionnarCliente(posicao:number):void{
    this.cliente = this.clientes[posicao];
    this.mostrarBtn = false;
    this.tabela = false;
  }

  editar():void{
    this.servico.editar(this.cliente)
    .subscribe(retorno => {
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      })
      
      this.clientes[posicao] = retorno;
      this.cliente = new Cliente();
      this.mostrarBtn = true;
      this.tabela = true;
      alert('Cliente editado com sucesso!');
      
    });


  }


  renover():void{
    this.servico.remover(this.cliente.codigo)
    .subscribe(retorno => {
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      })
      
      this.clientes.splice(posicao, 1);
      this.cliente = new Cliente();
      this.mostrarBtn = true;
      this.tabela = true;
      alert('Cliente removido com sucesso!');
      
    });

    
  }

  cancelar():void{
    this.cliente = new Cliente();
    this.mostrarBtn = true;
    this.tabela = true;
  }

  ngOnInit():void{
    this.selecionar();
  }

}
