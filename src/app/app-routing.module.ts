import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BindingEjemploComponent } from './components/binding-ejemplo/binding-ejemplo.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { ListaComponent } from './components/lista/lista.component';
import { PadreInputOutputComponent } from './components/padre-input-output/padre-input-output.component';

const routes: Routes = [
  {
    path: 'binding', component:BindingEjemploComponent
  },
  {
    path:'categorias', component: CategoriasComponent
  },
  {
    path:'lista', component: ListaComponent
  },
  {
    path: 'material', component: AngularMaterialComponent
  },
  {
    path: 'ciclodevida', component: CicloVidaComponent
  },
  {
    path: 'comunicacion', component: PadreInputOutputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
