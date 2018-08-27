import { NonLettersDirective } from './non-letters.directive';
import {ElementRef} from '@angular/core';

describe('NonLettersDirective', () => {
  it('should create an instance', () => {
    const directive = new NonLettersDirective();
    expect(directive).toBeTruthy();
  });
});
