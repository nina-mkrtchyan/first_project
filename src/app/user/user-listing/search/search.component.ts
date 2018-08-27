import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public searchControl: FormControl;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.searchControl = new FormControl();
        this.searchControl.valueChanges
            .pipe(debounceTime(1000))
            .subscribe( data => {
                this.search(data);
        });
    }

    public search(searchKey: string) {
        console.log(searchKey);

        if (searchKey !== '') {
            const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

            queryParams['search_key'] = searchKey;

            console.log(this.activatedRoute.snapshot);

            this.router.navigate([this.activatedRoute.url], { queryParams: queryParams });
        }
    }
}
