import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {

  textoArriba = '';
  textoAbajo = '';
  imagenUrl = 'https://i.ytimg.com/vi/M2k3eL77rqk/hqdefault.jpg';
  color = '#000000';
  isFav = false;
  constructor() { }

  ngOnInit() {
  }
  cambiarAtributos(event) {
    console.log(event);
    this[event.prop] = event.value;
  }
}
