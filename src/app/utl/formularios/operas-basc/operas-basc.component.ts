import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-basc',
  templateUrl: './operas-basc.component.html',
  styleUrls: ['./operas-basc.component.css']
})
export class OperasBascComponent {
  num1!:number;
  num2!:number;
  resultado!:number;

  SeleccionarOperacion:string = 'suma';
  tipoOperacion=[
    'suma',
    'resta',
    'multiplicacion',
    'division'
  ];
  calcular(){
    switch(this.SeleccionarOperacion){
      case 'suma':this.resultado=this.num1+this.num2;
      break;
      case 'resta':this.resultado=this.num1-this.num2;
      break;
      case 'multiplicacion':this.resultado=this.num1*this.num2
      break;
      case 'division':this.resultado=this.num1/this.num2
      break;
    }
  }
}
