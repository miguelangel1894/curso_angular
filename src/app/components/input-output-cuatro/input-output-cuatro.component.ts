import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-cuatro',
  templateUrl: './input-output-cuatro.component.html',
  styleUrls: ['./input-output-cuatro.component.sass']
})
export class InputOutputCuatroComponent implements OnInit {
  @Output() saludoCuatro: EventEmitter<string>
  
  constructor() { 
    this.saludoCuatro = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onClickCuatro(){
    this.saludoCuatro.emit('holaa te saluda el hijo cuatro')
  }

}
