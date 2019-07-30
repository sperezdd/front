import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const res: string[] = value.split('');
    let reverse: string[] = res.reverse();

    return reverse.join('');
  }

}
