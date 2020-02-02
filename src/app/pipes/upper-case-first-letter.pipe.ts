import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseFirstLetter'
})
export class UpperCaseFirstLetterPipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    if (value === null) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
