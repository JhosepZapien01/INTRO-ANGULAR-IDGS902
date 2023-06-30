import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alumno',
  templateUrl: './calificacion-alumno.component.html',
  styleUrls: ['./calificacion-alumno.component.css']
})
export class CalificacionAlumnoComponent {
  @Input() califica!: number
  @Output() calificaClick: EventEmitter<string> = new EventEmitter();
  puntosCal!: number;
  ngOnChanges():void{
    this.puntosCal = this.califica*76/10;
  }
  onClick(){
    this.calificaClick.emit(`${this.califica}`)
  }
}
