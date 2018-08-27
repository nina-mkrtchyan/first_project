import { Component, OnInit } from '@angular/core';
import {CafeService} from '../services/cafe.service';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';
import {Cafe} from '../cafe';
import {ActivatedRoute} from '@angular/router';
import {fromEvent, merge, Observable} from 'rxjs';


@Component({
  selector: 'app-cafe-listing',
  templateUrl: './cafe-listing.component.html',
  styleUrls: ['./cafe-listing.component.css']
})
export class CafeListingComponent implements OnInit {

    public cafes$;
    public scroll$;
    public search$;

    private searchKey: string;
    private page: number;
    private loading: boolean = false;
    private morePages: boolean = true;

    public cafes: Cafe[];

    constructor(
        private cafeService: CafeService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {

        this.scroll$ = fromEvent(window, 'scroll')
            .pipe(
                filter( _ => {
                    const pageHeight = document.documentElement.offsetHeight;
                    const windowHeight = window.innerHeight;
                    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop
                        + (document.documentElement && document.documentElement.scrollTop || 0);

                    if (pageHeight > windowHeight + scrollPosition) {
                        if (this.loading === false) {
                            return false;
                        }
                    }
                    return true;
                }),
                tap( _ => {
                    console.log('you\'re at the bottom of the page');
                }),
            );

        this.search$ = this.activatedRoute.queryParams
            .pipe( tap( url => {
                console.log('search');

                this.morePages = true;
                this.page = 0;
                this.searchKey = url.search_key;

                console.log(this.searchKey);
            }));

        this.cafes$ = merge(this.scroll$, this.search$)
            .pipe(
                filter( _ => this.morePages),
                tap( _ => {
                    this.loading = true;
                    ++this.page;
                }),
                switchMap(_ => this.cafeService.getCafes(this.searchKey, this.page)),
                map(data => {
                        this.morePages = data.hasMorePages;
                        console.log('morePages: ' + this.morePages);

                        if (this.page === 1) {
                            data = data['items'];
                            this.cafes = data;

                            console.log(data);

                        } else {
                            data = data['items'];

                            this.cafes = this.cafes.concat(data);
                            data = this.cafes;

                            console.log(data);
                        }
                        return data;
                }),
                tap(_ => {
                    this.loading = false;
                    console.log('loading: ' + this.loading);
                })
            );
    }

}
