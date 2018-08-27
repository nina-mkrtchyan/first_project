import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() class: string;
  @Input() type: string;

  @Output() onchanged = new EventEmitter<string>();


  private message: string;

  constructor(
      private data: DataService
  ) {}

  ngOnInit() {
      this.data.currentMessage.subscribe(
          message => {
              this.message = message;
              console.log(message);
          }
      );
  }

  public change() {
      this.onchanged.emit(this.message);
  }

}
