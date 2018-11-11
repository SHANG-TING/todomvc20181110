import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFilter',
})
export class StateFilterPipe implements PipeTransform {
  transform(value: any, status?: any): any {
    switch (status) {
      case 'Active':
        return value.filter(x => !x.isCompleted);
      case 'Completed':
        return value.filter(x => x.isCompleted);
      default:
        return value;
    }
  }
}
