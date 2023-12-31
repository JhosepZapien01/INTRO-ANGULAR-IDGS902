import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }




  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:"Rem",
      edad:23,
      correo:"remuru@gmail.com",
      foto:"src/assets/img/imag1.jpg",
      calif: 3.5
    },
    {
      matricula:5678,
      nombre:"Emilia",
      edad:24,
      correo:"emili@gmail.com",
      foto:"src/assets/img/imag2.jpg",
      calif:4.5
    },
    {
      matricula:1234,
      nombre:"Echidna",
      edad:27,
      correo:"erizodark@gmail.com",
      foto:"src/assets/img/imag3.jpg",
      calif:5
    }
  ];
  onCalificaClick(message:string){
    this.alumnoTitle= '$(message)';
  }
}
