import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './editar-usuario.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponentCanDeactivate {

  datosGuardados: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if ( this.datosGuardados) {
      return true;
    }

    return confirm('estas seguro de que quieres salir? perderaslos cambios...');

  }

}
