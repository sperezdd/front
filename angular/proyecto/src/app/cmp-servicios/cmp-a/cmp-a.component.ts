import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  //providers: [DatosService] //la puede usar el componente a y todos los compobnentes que esten en el componente a
})
export class CmpAComponent implements OnInit {

  datos: Array<string> = ['a' , 'b'] ;
  constructor(private datosService: DatosService) { }

  ngOnInit() { //Se deben inicializar los datos siempre en el init
    this.datos = this.datosService.getDatos();
  }

  guardarDato(dato: string): void {
    //this.datos.push(dato);
    this.datosService.addDatos(dato);
  }

  enviarDato(dato: string): void {
    this.datosService.enviar(dato);
  }

}
