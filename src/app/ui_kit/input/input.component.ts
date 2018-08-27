import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    @Input() type: string;
    @Input() controlName: string;
    @Input() control: FormControl;
    @Input() values: string[];
    @Input() validationMessage;

    public types = [
        'text',
        'number',
        'dropDown'
    ];

    constructor(
        private data: DataService
    ) { }

    ngOnInit() {
        if (this.types.indexOf(this.type) === -1) {
            throw new Error(`InputGroupComponent <type> is incorrect '${this.type}'`);
        }

        this.data.currentMessage.subscribe(
          message => {
              console.log(message);
          }
        );
    }

    public newMessage(value: string) {
        this.data.changeMessage(value);
    }

}
