import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  @Input('appBlink') colorLetra;
  @HostBinding('style.color') color;
  intervalId = null;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    if (!this.colorLetra) {
      this.colorLetra = 'yellow';
    }
    let i = 0;
    this.intervalId = setInterval(() => {
      console.log(i)
      i++;
      this.color = this.color === 'black' ? this.colorLetra : 'black';
    }, 300);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }
}