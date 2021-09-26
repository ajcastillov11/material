import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';


const ELEMENT_DATA: Usuario[] = [
  { usuario:'acastillo',nombre:'Andres',apellido:'Castillo',sexo:'M'},
  { usuario:'acastillo',nombre:'Andres',apellido:'Castillo',sexo:'M'},
 
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
