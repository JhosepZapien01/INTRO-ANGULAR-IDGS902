import { Component } from '@angular/core';
@Component({
  selector:'app_idgs902',
  template:`
  <h1>IDGS902</h1>
  <form>
    <label class="form-label">Matricula:</label>
    <input class="form-control" type="text" name="" value={{alumno2.matricula}}/>
    <label class="form-label">Nombre:</label>
    <input class="form-control" name="" type="text" value={{alumno2.nombre}}/>
    <label class="form-label">Apellido Paterno:</label>
    <input class="form-control" type="text" name="" value={{alumno2.apePaterno}}/>
    <label class="form-label">Inscrito:</label>
    <input class="form-control"  type="number" name="" value={{alumno2.inscripcion}}/>
    <label class="form-label">Fecha de nacimiento:</label>
    <input class="form-control" name="" type="text" [value]="alumno2.fechaNacimiento | date:'dd-MM-yyyy'"/>
  </form>
  <hr>`
})
export class idgs902{
  alumno2={
    matricula:19002618,
    nombre: "Itsuki",
    apePaterno:"Nakano",
    inscripcion:2156.98,
    fechaNacimiento: new Date("2000-05-07")
  };
  constructor(){}

}
