import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueFalse'
})
export class TrueFalsePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'True':
        return 'Vrai';
      case 'False':
        return 'Faux';
      default:
        return value;
    }
  }

}
