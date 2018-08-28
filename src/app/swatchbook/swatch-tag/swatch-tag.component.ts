import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SwatchbookService} from '../swatchbook.service';
import {SwatchTag} from '../swatch-tag';

@Component({
    selector: 'app-swatch-tag',
    templateUrl: './swatch-tag.component.html',
    styleUrls: ['./swatch-tag.component.css']
})
export class SwatchTagComponent implements OnInit {

    @Input() swatchTag: SwatchTag;

    @Output() onOpened: EventEmitter<number>;
    @Output() onClosed: EventEmitter<number>;

    public isSelected: boolean = false;
    public tagColor: string;

    constructor(
        private swatchbookService: SwatchbookService
    ) {
        this.onOpened = new EventEmitter<number>();
        this.onClosed = new EventEmitter<number>();
    }

    ngOnInit() {
        this.swatchbookService.onChangedSelectedSwatchTag
            .subscribe( (id: number) => {
                if (id == this.swatchTag.id) {
                    this.change(id);
                }
            });
    }

    public change(id: number): void {
        console.log(id);

        if (this.isSelected) {
            this.isSelected = false;
            this.tagColor = '#f8f8f8';

            this.onClosed.emit(id);

        } else {
            this.isSelected = true;
            this.tagColor = this.swatchTag.color;

            this.onOpened.emit(id);
        }
    }
}


