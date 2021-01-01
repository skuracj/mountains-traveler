import {NgModule} from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';
import {CommonModule} from '@angular/common';
import { HyphensToSpacesPipe } from './hyphens-to-spaces.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [TimeAgoPipe, HyphensToSpacesPipe],
    declarations: [TimeAgoPipe, HyphensToSpacesPipe]
})
export class PipeModule {
}
