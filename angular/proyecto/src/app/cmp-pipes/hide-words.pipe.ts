import { Pipe, PipeTransform, ɵɵtextInterpolateV } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const palabras: string[] = value.split(' ');
    let resultado = '';
    let palabraABorrar = '';
    for ( let parametro = 0 ; parametro < args.length ; parametro++) {
        palabraABorrar = args[parametro];
        console.log(palabras);
        for (let i = 0 ; i < palabras.length ; i++) {
          if ( palabraABorrar !== palabras[i]) {
            resultado += palabras[i] + ' ';
          } else {
            resultado += palabras[i].replace(/./g , '*') + ' ';
          }
      }
    }
    return resultado;
    /*
    let palabras = args[0]
    for (let palabra of palabras ) {
        let reg = new RegExp(palabra, 'gi');
        if(palabra.match(reg)) {
          value = value.replace(reg,'*'.repeat)(palabra.length))
        }
      }
        }
    }
  */
  }
}

