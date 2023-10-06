import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeof',
  standalone: true,
  pure: true,
})
export class TypeofPipe implements PipeTransform {
  transform(value: any): string {
    return typeof value;
  }
}
