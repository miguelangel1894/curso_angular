import { Component, OnInit } from '@angular/core';

export interface nombreCiudadesColombia {
  nombre: string;
}

@Component({
  selector: 'app-padre-input-output',
  templateUrl: './padre-input-output.component.html',
  styleUrls: ['./padre-input-output.component.sass']
})
export class PadreInputOutputComponent implements OnInit {

  mensajeEnviado: string = ''
  mensajeEnviadoDos: string = ''
  mensajeEnviadoTres: string = ''
  mensajeEnviadoCuatro: string = ''
  
  nombreCiudades: Array<nombreCiudadesColombia> = [
    {nombre: 'sincelejo'},
    {nombre: 'monteria'},
    {nombre: 'corozal'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  paraPadre(event: string){
    this.mensajeEnviado = event
    console.log('envio desde hijo: ', event)
  }

  paraPadreDos(event: string){
    this.mensajeEnviadoDos = event
    console.log('envio desde el segundo hijo', event)
  }

  paraPadreTres(event: string){
    this.mensajeEnviadoTres = event
    console.log('envio desde el tercer hijo', event)
  }

  paraPadreCuatro(event: string){
  this.mensajeEnviadoCuatro = event
  console.log('envio desde hijo cuatro ', event)
  }

}
