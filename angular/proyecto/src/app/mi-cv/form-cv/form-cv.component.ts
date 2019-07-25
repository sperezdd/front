import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  nombre = '';
  apellido = '';
  email = '';
  url = '';
  Habilidad = '';
  @Output() nombreCambiado = new EventEmitter<string>();
  @Output() ApellidoCambiado = new EventEmitter<string>();
  @Output() emailCambiado = new EventEmitter<string>();
  @Output() HabilidadAgregada = new EventEmitter<string>();
  @Output() urlCambiado = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
  cambiarNombre(event) {
    this.nombreCambiado.emit(event.target.value);
  }
  cambiarApellido(event) {
    this.ApellidoCambiado.emit(event.target.value);
  }
  cambiaremail(event) {
    this.emailCambiado.emit(event.target.value);
  }
  cambiarurl(event) {
    this.urlCambiado.emit(event.target.value);
  }

  agregarHabilidad(referencia) {
    this.HabilidadAgregada.emit(referencia.value);
    referencia.value = '';
  }


}
