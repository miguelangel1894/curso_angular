import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-dos',
  templateUrl: './input-output-dos.component.html',
  styleUrls: ['./input-output-dos.component.sass']
})
export class InputOutputDosComponent implements OnInit {
  @Output() mensajeHijoDos: EventEmitter<string>

  constructor() { 
    this.mensajeHijoDos = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onclickParaPadre(){
    this.mensajeHijoDos.emit('hola papá te saluda otro output')
  }

}
