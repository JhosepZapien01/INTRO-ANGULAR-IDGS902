import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { idgs902 } from './utl/idgs902.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formulario/operas/operas.module';
import { DistanciaModule } from './utl/distancia/distancia.module';
import { CalificacionAlumnoComponent } from './utl/calificacion-alumno/calificacion-alumno.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    idgs902,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    CalificacionAlumnoComponent,
    AlumnoFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
