import {Component, OnInit} from '@angular/core';
import {UserLoginService} from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public showManageSwatchTags: boolean = false;

    ngOnInit() {

    }

    constructor(
        public loginService: UserLoginService,
    ) {}



}
