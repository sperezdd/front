import { Injectable,EventEmitter } from '@angular/core';
import { LogService } from './log.service';

// vamos a crear aqio in array que tienen que mostrar los componentes a y b. y que podamos añadir cosas y se sigan mostrando en ambos componentes
/* @injectable:


*/
@Injectable({
  //con est se crea una instancia para toda la aplciacion, en la raiz (root). Si queremos una instancia distinta para cada componente, se indica en el @component
  providedIn: 'root'
})


export class DatosService {

  private datos: Array<string> = ['a'];
  datoEnviado = new EventEmitter<string>();

  constructor(private logService: LogService) {
 }

  getDatos(): Array <string> {
  return this.datos;
  }

  addDatos(dato: string): void {
  this.datos.push(dato);
  this.logService.mostrar('se ha guardado ' + dato);
  }

  enviar(dato: string): void {
    //para enviar cosas entre componentes, en lugar de creaarlo en un componente y pasarlo como anrs, lo creamos en un servicio y lo usamos,
    this.datoEnviado.emit(dato);
  }
}
