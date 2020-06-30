import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    if (!value) { return []; }
    return _.sortBy(value, item => item.name).reverse();
  }

}
