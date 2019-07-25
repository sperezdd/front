import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cv',
  templateUrl: './mi-cv.component.html',
  styleUrls: ['./mi-cv.component.css']
})
export class MiCvComponent implements OnInit {
  nombre = '';
  apellido = '';
  email = '';
  url = '';
  habilidades: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(event) {
    this.nombre = event;
  }
  cambiarApellido(event) {
    console.log(event);
    this.apellido = event;
  }
  cambiaremail(event) {
    this.email = event;
  }
  cambiarurl(event) {
    this.url = event;
  }
  cambiarhabilidades(event) {
    this.habilidades.push(event);
  }

}
