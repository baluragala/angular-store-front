import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, discountPercent: number): any {
    return value - (value * discountPercent / 100);
  }

}
