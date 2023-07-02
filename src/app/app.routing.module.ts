import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IricComponent } from './utl/iric/iric.component';
import { AlumnosReactiveComponent } from './formularios/alumnos-reactive/alumnos-reactive.component';



const routes:Routes=[
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'AlatAlum',component: AlumnosReactiveComponent},
  {path: 'IRIC', component: IricComponent}
]

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes),
           CommonModule
          ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
