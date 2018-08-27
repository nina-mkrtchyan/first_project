import {Component, Input, OnInit, Output} from '@angular/core';
import {SwatchbookService} from '../swatchbook.service';

@Component({
  selector: 'app-custom-type-row',
  templateUrl: './custom-type-row.component.html',
  styleUrls: ['./custom-type-row.component.css']
})
export class CustomTypeRowComponent implements OnInit {

    @Input() swatchTags;

    private canChooseMultiple: boolean;
    private selectedSwatchTagId: number;

    public openChildRows: any[] = [];

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

    public openTag(id: number) {
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

    private changeSelectedSwatchTag(id) {
        this.closeTag(this.selectedSwatchTagId);

        this.swatchbookService.onChangedSelectedSwatchTag.next(this.selectedSwatchTagId);

        this.selectedSwatchTagId = id;
    }

    public closeTag(id: number) {
        const swatchTag = this.swatchTags.find( item => item.id == id);
        console.log(swatchTag);

        if (swatchTag.identifiedCustomType) {
            if (this.swatchbookService.openedRowsId.indexOf(id) == -1) {
                this.removeToOpenChildRows(swatchTag);

                this.removeFromOpenRows(swatchTag);
            }
        }
    }

    private removeFromOpenRows(swatchTag: any) {
        const index = this.swatchbookService.openedRowsId.indexOf(swatchTag.identifiedCustomTypeId);
        this.swatchbookService.openedRowsId.splice(index, 1);

        console.log(this.swatchbookService.openedRowsId);
    }


    private addToOpenRows(swatchTag: any) {
        this.swatchbookService.openedRowsId.push(swatchTag.identifiedCustomTypeId);

        console.log(this.swatchbookService.openedRowsId);
    }


    private removeToOpenChildRows(swatchTag: any) {
        const i = this.openChildRows.indexOf(swatchTag.identifiedCustomType);
        this.openChildRows.splice(i, 1);

        console.log(this.openChildRows);
    }


    private addToOpenChildRows(swatchTag: any) {
        this.openChildRows.push(swatchTag.identifiedCustomType);

        console.log(this.openChildRows);
    }

}
