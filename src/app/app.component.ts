import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
duplicado(n: number) {
 return 2*n;
}
  title = 'intro-angular-idgs902';
  alumno={
    matricula : 123,
    nombre : "Miku",
    apePaterno : "Nakano",
    inscrito : 2745.93,
    fechNacimiento : new Date()
  };
}
