import {Component, Input, OnInit, Output} from '@angular/core';
import {SwatchbookService} from '../swatchbook.service';
import {SwatchTag} from '../swatch-tag';

@Component({
  selector: 'app-custom-type-row',
  templateUrl: './custom-type-row.component.html',
  styleUrls: ['./custom-type-row.component.css']
})
export class CustomTypeRowComponent implements OnInit {

    @Input() swatchTags;

    private canChooseMultiple: boolean;
    private selectedSwatchTagId: number;

    public openChildRows: SwatchTag[] = [];

    constructor(
        private swatchbookService: SwatchbookService
    ) { }

    ngOnInit() {
        if (this.swatchTags.values) {
            this.canChooseMultiple = this.swatchTags.canChooseMultiple;
            this.swatchTags = this.swatchTags.values.items;
        }

        console.log(this.swatchTags);
        console.log(this.canChooseMultiple);
    }

    public openTag(id: number): void {
        const swatchTag = this.swatchTags.find( item => item.id == id);
        console.log(swatchTag);

        if (swatchTag.identifiedCustomType) {
            if (this.swatchbookService.openedRowsId.indexOf(id) == -1) {
                this.addToOpenChildRows(swatchTag);

                this.addToOpenRows(swatchTag);
            }
        }

        if (!this.selectedSwatchTagId) {
            this.selectedSwatchTagId = id;
        } else {
            if (!this.canChooseMultiple) {
                this.changeSelectedSwatchTag(id);
            }
        }
    }

    private changeSelectedSwatchTag(id: number): void {
        this.closeTag(this.selectedSwatchTagId);

        this.swatchbookService.onChangedSelectedSwatchTag.next(this.selectedSwatchTagId);

        this.selectedSwatchTagId = id;
    }

    public closeTag(id: number): void {
        const swatchTag = this.swatchTags.find( item => item.id == id);
        console.log(swatchTag);

        if (swatchTag.identifiedCustomType) {
            if (this.swatchbookService.openedRowsId.indexOf(id) == -1) {
                this.removeToOpenChildRows(swatchTag);

                this.removeFromOpenRows(swatchTag);
            }
        }
    }

    private removeFromOpenRows(swatchTag: any): void {
        const index = this.swatchbookService.openedRowsId.indexOf(swatchTag.identifiedCustomTypeId);
        this.swatchbookService.openedRowsId.splice(index, 1);

        console.log(this.swatchbookService.openedRowsId);
    }


    private addToOpenRows(swatchTag: any): void {
        this.swatchbookService.openedRowsId.push(swatchTag.identifiedCustomTypeId);

        console.log(this.swatchbookService.openedRowsId);
    }


    private removeToOpenChildRows(swatchTag: any): void {
        const i = this.openChildRows.indexOf(swatchTag.identifiedCustomType);
        this.openChildRows.splice(i, 1);

        console.log(this.openChildRows);
    }


    private addToOpenChildRows(swatchTag: any): void {
        this.openChildRows.push(swatchTag.identifiedCustomType);

        console.log(this.openChildRows);
    }

}
