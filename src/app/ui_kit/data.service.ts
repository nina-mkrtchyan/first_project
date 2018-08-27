import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new Subject<string>();
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  public changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
