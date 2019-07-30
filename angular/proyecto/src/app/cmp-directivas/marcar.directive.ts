import { Directive, HostListener, HostBinding, Input } from '@angular/core';

/*
selector: nombre co el que hay que usar la durectiva
hostBinging: decorador recibe como parametro aquello que queremosmodificar del html al qe le hemos puesto la diectiva. A la etiqueta html al que le llega la directiva, tiene que cambiar dentro de los estilos el color de fondo
hostlistener: recibe como parametro el evento que queremos detectar para que se ejecute una funcion
*/

@Directive({
  selector: '[appMarcar]'
})

export class MarcarDirective {
  @Input('appMarcar') colorFondo = 'yellow';
  colorInicial = 'white';

  @HostBinding('style.backgroundColor') color; // cada vez que color cambie de valor, el style.backgroundColor va a cambiar.
  @HostListener('mouseover') onMouseOver() {
      this.color = this.colorFondo;
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.color = this.colorInicial;
  }


  // constructor() {
  //   console.log('CONSTRUCTOR')
  //   console.log(this.colorFondo);
  //   // this.color = this.colorFondo;
  // }

  ngOnInit() {
    // console.log('ONINIT')
    // console.log(this.colorFondo);
    this.colorFondo = this.colorFondo ? this.colorFondo : 'yellow';
  }
}
