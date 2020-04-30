import { Component, OnInit, Input } from '@angular/core';
import { DataBase } from '../data-base';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  myDate = Date.now();
  databases: DataBase[] = [
    { codigo: 1, nombre: 'Ricardo', apellido: 'Montoya', nota: 4 },
    { codigo: 2, nombre: 'Diego', apellido: 'Ramirez', nota: 4.9 },
    { codigo: 3, nombre: 'Brahian', apellido: 'Gallego', nota: 2.5 },
    { codigo: 4, nombre: 'Solanlly', apellido: 'Montoya', nota: 2.9 },
    { codigo: 5, nombre: 'Solanlly', apellido: 'Montoya', nota: 2.8 },
  ];
  agregarPersona = false;
  agregarPersonaStatus = '';


 observacion: string;

  constructor() {
    setTimeout(
      () => {
        this.agregarPersona = true;
      }
      , 3000
    );
  }
  ngOnInit(): void {}
   crearObservacion(nota: number): string {
      if (nota < 3){
        return this.observacion = 'Perdió';
      }
      else{
        return this.observacion = 'Ganó';
      }
    }
    onAlumnoAgregar(alumno:DataBase){
      this.databases.push(alumno);
    }
}


