import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  //providers: [DatosService] //con esto l decimos qe se cree una instancia de datosService.
})
export class CmpBComponent implements OnInit {

  datos: Array<string> = ['a' , 'b'];
  dato: string = '' ;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
    //para comprobar que se eesta cambiando algo en un servicio , en lugar de pasarlo por el html, hay que "suscribirse" al servicio
    this.datosService.datoEnviado.subscribe((dato) => { this.dato = dato; });
  }

  guardarDato(dato: string): void {
    this.datosService.addDatos(dato);
  }

  enviarDato(dato: string): void {

  }

}
