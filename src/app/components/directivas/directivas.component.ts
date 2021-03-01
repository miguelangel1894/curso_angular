import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.sass']
})
export class DirectivasComponent implements OnInit {

 directiva_ng_model: string = ''

 directiva_ng_for: Array<any> = [
    {nombre: 'miguel',
      apellido: 'bohorquez'
    },
    {nombre: 'pepe',
      apellido: 'perez'
    }
 ]

 mostrar: boolean

 superhero = 'Spiderman';

  constructor() { 
    this.mostrar = true
  }

  ngOnInit(): void {
  }

  mostrarP
  (){
    this.mostrar = !this.mostrar
  }

}
