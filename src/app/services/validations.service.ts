import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

    constructor() {
    }

    public validateGender(control: AbstractControl) {
        if (!(control.value === '1' || control.value === '2')) {
            return {validGender: true};
        }
        return null;
    }

    public validatePhoneNumber(control: AbstractControl) {
        const regex = RegExp('[a-z]');

        if (regex.test(control.value)) {
            return {'validPhoneNumber': 'invalid phone number'};
        }

        return null;
    }

    public getErrorMessage(type: string): string {
        const name = 'The field';
        switch (type) {
            case 'required':
                return `The field is required.`;
            case 'minlength':
                return `${name} must have at least ${type} characters.`;
            case 'maxlength':
                return `${name} must have no more than ${type} characters.`;
            case 'validPhoneNumber':
                return `invalid phone number`
            case 'email':
                return `invalid email`
            default:
                return `${name} is not valid (${type}).`;
        }
    }

}
