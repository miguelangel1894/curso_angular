import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.sass']
})
export class InputOutputComponent implements OnInit {
  @Input() ciudad: any = ''
  @Output() mensajeHijo: EventEmitter<string>

  constructor() { 
    this.mensajeHijo = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onClickHijo(){
    this.mensajeHijo.emit('hola papá')
  }

}
