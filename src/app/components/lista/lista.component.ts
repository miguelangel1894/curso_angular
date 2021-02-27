import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  lista: string[] = ["Angular","React"]
  nuevoLenguaje: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  Nuevo() : void{
    this.lista.push(this.nuevoLenguaje)
  }

}
