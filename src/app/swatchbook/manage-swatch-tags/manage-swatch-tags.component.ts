import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {SwatchbookService} from '../swatchbook.service';
import {map, tap} from 'rxjs/operators';
import {SwatchTag} from '../swatch-tag';

@Component({
  selector: 'app-manage-swatch-tags',
  templateUrl: './manage-swatch-tags.component.html',
  styleUrls: ['./manage-swatch-tags.component.css']
})
export class ManageSwatchTagsComponent implements OnInit {

    @HostListener('click') onClick($event) {
        console.log('asdasdsa')
        if ((<HTMLElement>event.target).className == 'modal') {
            console.log('User Click using Host Listener');
            this.done();
        }
    }

    @Output() onClosed = new EventEmitter<void>();

    public swatchTags: SwatchTag[] = [];

    constructor(
        private swatchbookService: SwatchbookService
    ) { }

    ngOnInit() {
        this.getSmartTags();
    }

    public getSmartTags (): void {
        this.swatchbookService.getSmartTags()
            .pipe(
                map( (data: any) => data['items']),
                tap( (data: SwatchTag[]) => {
                    data.forEach( item => {
                        this.swatchbookService.openedRowsId.push(item.id);
                    });
                    console.log(this.swatchbookService.openedRowsId);
                })
            )
            .subscribe( (data: SwatchTag[]) => {
                this.swatchTags = data;
                console.log(this.swatchTags);
            });
    }

    public done(): void {
        this.onClosed.emit();
    }

}
