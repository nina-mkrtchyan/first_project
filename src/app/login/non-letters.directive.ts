import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appNonLetters]'
})
export class NonLettersDirective {

    @HostListener('input') changeTextType() {
        let value = this.el.nativeElement.value;
        const lastCharacter = value.slice(-1);

        const regex = RegExp('[a-z]');

        if (regex.test(lastCharacter)) {
            value = value.replace(value.substring(value.length - 1), '');
            this.el.nativeElement.value = value;
        }
    }

    constructor(private el: ElementRef) {
    }

}
