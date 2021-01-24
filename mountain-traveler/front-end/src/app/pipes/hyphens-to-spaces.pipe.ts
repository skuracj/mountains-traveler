import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'hyphensToSpaces'
})
export class HyphensToSpacesPipe implements PipeTransform {

    transform(value: string): string {
        if ((typeof value) !== 'string') {
            return value;
        }
        return value.replace(/-/g, ' ');
    }

}
