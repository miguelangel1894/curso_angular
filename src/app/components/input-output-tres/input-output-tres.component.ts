import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-tres',
  templateUrl: './input-output-tres.component.html',
  styleUrls: ['./input-output-tres.component.sass']
})
export class InputOutputTresComponent implements OnInit {

  @Output() mensajeHijoTres: EventEmitter<string>

  constructor() { 
    this.mensajeHijoTres = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onClickTres(){
    this.mensajeHijoTres.emit('Hola Papá te saluda el componente tres')
  }

}
