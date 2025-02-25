import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeDate',
})
export class RelativeDatePipe implements PipeTransform {
  transform(value: string | number): unknown {
    const data = new Date(value);
    const now = new Date();
    const rezult = now.getTime() - data.getTime();

    if (rezult < 60000) return 'только что';
    if (rezult < 3600000) return `${Math.floor(rezult / 60000)} минут назад`;
    if (rezult < 86400000) return `${Math.floor(rezult / 3600000)} часа назад`;
    if (rezult < 604800000)
      return `${Math.floor(rezult / 86400000)} дней назад`;
    if (rezult < 2628002880)
      return `${Math.floor(rezult / 604800000)} недель назад`;

    return `${Math.floor(rezult / 2628002880)} месяц назад`;
  }
}
