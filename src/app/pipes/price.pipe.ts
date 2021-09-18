import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'price'
})
export class PricePipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (!value) {
            return '-';
        }
        const inputNum = parseFloat(value);
        const power = Math.pow(10, 4 || 0);
        const converted =  Math.floor(inputNum * power) / power;
        return `$${converted.toString()}`;
    }
}
