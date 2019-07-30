import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import {filter, map} from 'rxjs/operators';
/*
son como promesas pero las promesas una vez recibias los datos se terminaba.
el observable se queda "escuchando" y si cambian los datos se actualiza. El subscribe funciona con observables.
*/
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  subscripciones: Array<Subscription> = [];

  constructor() { }

  ngOnInit() {
    // this.getNums();
    // this.miInterval();
    // this.conError();
    this.obsNumsPares();
  }

  getNums() {
    const numsObs = interval(500); // Observable que nos va a ir mostrando un numero cada 500 ms

    const s = numsObs.subscribe((num) => { // cada 500ms se ejecuta la funcion
      console.log(num);
    });

    this.subscripciones.push(s);
  }

  miInterval() {
    const miIntervalObs = Observable.create((observer: Observer<number>) => {
      let i = 0;
      setInterval(() => {
        observer.next(i);
        i += 1;
      }, 500);
    });
    const s = miIntervalObs.subscribe((n) => {
      console.log('mi interval: ', n);
    });
    this.subscripciones.push(s);
  }

  conError() {
    const obsConError = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Mensaje 1');
      }, 300);
      setTimeout(() => {
        observer.next('Mensaje 2');
      }, 700);
      // setTimeout(() => {
      //   observer.error('Error...');
      // }, 1300);
      setTimeout(() => {
        observer.complete();
      }, 2000);
    });

    /*subscribe tiene 3 funciones: la que se ejecuta si np hay error;
                                    la que se ejecuta si hay error;
                                     y la que se ejecuta cuando el observable ha terminado
                                     */
    const s = obsConError.subscribe(
      msg => console.log('mi msg: ', msg), // observer.next
      err => console.log('mi error: ', err), // observer.error
      () => console.log('El observable ha terminado...') // observer.complete
      );
    this.subscripciones.push(s);
  }

  obsNumsPares() {
    const obsNumsPares = Observable.create(
      (observer: Observer<number>) => {
        setInterval(() => {
          // math.random - da un numero al azar sin llegar al uno, entre 0 y 1. math.floor - redondea a la parte entera
          const num = Math.floor(Math.random() * 101);
          observer.next(num);
        }, 200);
      });
    const s = obsNumsPares
      // .pipe(
      //   filter(n => n % 2 === 0),
      //   map(n => n / 2)
      // )
      .subscribe((n) => {
      console.log('num par', n);
    });
    this.subscripciones.push(s);
  }

  ngOnDestroy() {
    this.subscripciones.forEach(sub => sub.unsubscribe());
  }

}
