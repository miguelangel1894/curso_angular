import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';



@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.sass']
})
export class OnChangesComponent implements OnInit {

  @Input() nombre: string =''

  changes: string[] = ['']

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange){
    this.changes.push(JSON.stringify(changes))
  }



}
