import {Component, HostListener, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

    public users: User[];

    public isShown = true;

    private morePages = true;

    private loading: boolean = false;

    private page: number = 1;

    private searchKey: string;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const pageHeight = document.documentElement.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop
            + (document.documentElement && document.documentElement.scrollTop || 0);

        if (pageHeight <= windowHeight + scrollPosition && this.loading === false) {
            this.loadPage();
        }
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams
            .subscribe(url => {
                console.log(url.search_key);
                this.searchKey = url.search_key;
                this.morePages = true;
                this.page = 1;

                this.loadPage(this.searchKey);
          });
    }

    private loadPage(searchKey: string = ''): void {
        if ( this.morePages === false) {
            return;
        } else {
            this.loading = true;

            this.getUsers(searchKey, this.page);

            ++this.page;
            console.log(this.page);
        }
    }

    private getUsers(searchKey: string, page: number = 1): void {
        this.userService.getUsers(searchKey, page)
            .subscribe( data => {
                console.log(data);
                this.morePages = data.hasMorePages;
                console.log('morePages: ' + this.morePages);

                if (page === 1) {
                    this.users = data['items'];
                } else {
                    console.log('you\'re at the bottom of the page');

                    this.users = this.users.concat(data['items']);
                    console.log(this.users);
                }

                this.loading = false;
        });

    }

    public deleteUser(id: number) {
        this.userService.deleteUser(id).subscribe( data => {
            this.users.splice(this.users.indexOf(data), 1)
            console.log(this.users);
        }, err => {
            console.log(err.status);
        });
    }

}




