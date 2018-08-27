import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

    public user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.userService.getUser(this.route.snapshot.params.id)
            .subscribe( data => {
                    console.log(data);
                    this.user = data;
            });
    }
}

