import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ListaComponent } from './components/lista/lista.component';
import { BindingEjemploComponent } from './components/binding-ejemplo/binding-ejemplo.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatExpansionModule } from "@angular/material/expansion";
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { OnChangesComponent } from "./components/ciclo-vida/on-changes/on-changes.component";
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PadreInputOutputComponent } from './components/padre-input-output/padre-input-output.component';
import { InputOutputDosComponent } from './components/input-output-dos/input-output-dos.component';
import { InputOutputTresComponent } from './components/input-output-tres/input-output-tres.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ListaComponent,
    BindingEjemploComponent,
    AngularMaterialComponent,
    CicloVidaComponent,
    OnChangesComponent,
    InputOutputComponent,
    PadreInputOutputComponent,
    InputOutputDosComponent,
    InputOutputTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatSlideToggleModule,
    MatExpansionModule
  ]
})
export class AppModule { }
