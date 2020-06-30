import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformText'
})
export class TransformTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) { return ''; }
    return value.toUpperCase();
  }

}
