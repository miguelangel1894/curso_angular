import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-ejemplo',
  templateUrl: './binding-ejemplo.component.html',
  styleUrls: ['./binding-ejemplo.component.sass']
})
export class BindingEjemploComponent implements OnInit {

  constructor() { }

  texto: string ="binding sencillo"

  color: string = "#ffff"
  colorBg: string = "#000"
  contenido: string = "Holaa"

  habilitar: boolean = true

  nombre: string = ""
  apellido: string = ""

  ngOnInit(): void {
  }

  //void para no devolver nada
  onInput(e: any) : void{
    this.nombre = e.target.value.toUpperCase()
    console.log(this.nombre)
  }

}
