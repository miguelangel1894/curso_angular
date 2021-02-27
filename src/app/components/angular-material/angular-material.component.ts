import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.sass']
})
export class AngularMaterialComponent implements OnInit {
  panelOpenState = false;


  constructor() { }

  ngOnInit(): void {
  }

}
