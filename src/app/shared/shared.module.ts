import { NgModule } from '@angular/core';
import {SearchComponent} from '../user/user-listing/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorMessagePipe} from './pipes/error-message';
import {InputComponent} from '../ui_kit/input/input.component';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '../ui_kit/button/button.component';
import {DataService} from '../ui_kit/data.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        SearchComponent,
        InputComponent,
        ButtonComponent,
        ErrorMessagePipe,
    ],
    exports: [
        SearchComponent,
        InputComponent,
        ButtonComponent,
        ErrorMessagePipe
    ],
    providers: [
        DataService
    ],
})
export class SharedModule { }
