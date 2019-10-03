import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number): string {
    const dividers = {
      1000: 'K',
      1000000: 'M',
    };
    let winDivider: number;

    Object.keys(dividers).forEach(key => {
      const divider = parseInt(key, 10);
      if (value / divider > 1) {
        winDivider = divider;
      }
    });

    return winDivider
      ? Math.round(value / winDivider * 10) / 10 + dividers[winDivider]
      : value.toString();

  }

}
