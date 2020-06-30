import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: any[], ...args: any[]): any[] {
    if (!value) { return []; }
    if (args[0]) {
      return _.sortBy(value, (item) => item.name).reverse();
    } else {
      return _.sortBy(value, (item) => item.name);
    }
  }
}
