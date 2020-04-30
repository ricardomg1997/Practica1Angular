import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataBase } from '../data-base';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() crearAlumno = new EventEmitter<DataBase>();
  codigo: number;
  nombre: string;
  apellido: string;
  nota: number;

  constructor() { }

  ngOnInit(): void {
  }
  onCrearpersona(){
    let alumno = new DataBase(this.codigo, this.nombre, this.apellido, this.nota);
    this.crearAlumno.emit(alumno);
   }
}
