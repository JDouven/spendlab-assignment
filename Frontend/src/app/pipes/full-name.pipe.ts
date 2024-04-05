import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models';

@Pipe({
  name: 'fullName',
  standalone: true,
})
export class FullNamePipe implements PipeTransform {
  transform(value: Client): string {
    return `${value.name} ${value.surname}`;
  }
}
