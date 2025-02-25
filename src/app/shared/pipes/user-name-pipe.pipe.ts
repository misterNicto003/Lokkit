import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNamePipe',
})
export class UserNamePipePipe implements PipeTransform {
  transform(value: string): unknown {
    const username = {
      userName: 'abubakr',
      description: 'frontender',
    };

    if (!value) {
      return username.userName;
    }
    if (!value) {
      return username.description;
    }

    return value;
  }
}
