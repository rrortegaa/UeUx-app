import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de la Web-App
import { Sect1Component } from './sect1/sect1.component';
import { Sect2Component } from './sect2/sect2.component';
import { Sect3Component } from './sect3/sect3.component';
import { Sect4Component } from './sect4/sect4.component';

const routes: Routes = [
  {path:'sect1', component: Sect1Component},
  {path:'sect2', component: Sect2Component},
  {path:'sect3', component: Sect3Component},
  {path:'sect4', component: Sect4Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
