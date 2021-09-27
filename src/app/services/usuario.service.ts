import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    { usuario:'acastillo',nombre:'Andres',apellido:'Castillo',sexo:'M'},
    { usuario:'pperez',nombre:'Pepito',apellido:'Perez',sexo:'M'},
    { usuario:'laurora',nombre:'Laura',apellido:'Lora',sexo:'F'},
    { usuario:'jcardona',nombre:'Juan',apellido:'Cardona',sexo:'M'},
    { usuario:'amanzanero',nombre:'Armando',apellido:'Manzanero',sexo:'M'},
    { usuario:'ppontevedra',nombre:'Paola',apellido:'Pontevedra',sexo:'F'},
  ];
  
  constructor() { }


  getUsarios(){
    return this.listUsuarios.slice();
  }

  eliminarusuario(id:number){
    this.listUsuarios.splice(id,1);
  }

  agregarUsuario(data:Usuario){
    this.listUsuarios.unshift(data);
  }
}
