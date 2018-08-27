import { Pipe, PipeTransform } from '@angular/core';
import {ValidationsService} from '../../services/validations.service';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'errorMessage'})
export class ErrorMessagePipe implements PipeTransform {
    constructor(
        private validationService: ValidationsService
    ) {

    }
    transform(value: string): string {
        console.log(Object.keys(value)[0]);
        console.log(value);
        return this.validationService.getErrorMessage(Object.keys(value)[0]);
    }
}
