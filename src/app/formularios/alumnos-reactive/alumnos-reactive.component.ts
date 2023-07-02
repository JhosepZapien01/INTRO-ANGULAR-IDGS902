import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-reactive',
  templateUrl: './alumnos-reactive.component.html',
  styleUrls: ['./alumnos-reactive.component.css']
})
export class AlumnosReactiveComponent {
    mat!:string;
    nom!:string;
    edad!:string;
    correo!:string;
    calif!:string;
    foto!:string;
  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.alumnosForm = this.initForm();
  }
  onSubmit():void{
    //console.log('Form ->', this.alumnosForm.value)
    this.obtenerValor();
  }
  obtenerValor():void{
     this.mat=this.alumnosForm.get('matricula')?.value;
    this.nom=this.alumnosForm.get('nombre')?.value;
    this.edad=this.alumnosForm.get('edad')?.value;
    this.correo=this.alumnosForm.get('correo')?.value;
    this.calif=this.alumnosForm.get('calif')?.value;
    this.foto=this.alumnosForm.get('foto')?.value;
    console.log('Matricula:', this.mat)
    console.log('Nombre:', this.nom)
    console.log('edad:', this.edad)
    console.log('correo:', this.correo)
    console.log('calif:', this.calif)
    console.log('foto:', this.foto)
  }
  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[ Validators.required]],
      nombre:['',[ Validators.required]],
      edad:['',[ Validators.required]],
      correo:['',[ Validators.required]],
      foto:['',[ Validators.required]],
      calif:['',[ Validators.required]]
    });
  }
}
