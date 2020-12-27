import {NgModule} from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [TimeAgoPipe],
    declarations: [TimeAgoPipe]
})
export class PipeModule {
}
