import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {

  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  resultado!:number;
  a!:number;
  b!:number;
  calcular(){
   this.a = Math.pow((this.x1-this.x2),2);
   this.b =Math.pow((this.y1-this.y1),2);

   this.resultado = Math.sqrt((this.a+this.b));
  }
}
