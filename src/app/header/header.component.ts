import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserLoginService} from '../services/user-login.service';
import {User} from '../user/user';
import {SocketService} from '../chat/services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    user: User;

    constructor(
        private router: Router,
        private loginService: UserLoginService,
        private socketService: SocketService
    ) {
        console.log(loginService.user);
        this.user = loginService.user;
    }

    ngOnInit() {

    }

    public logeOut(): void {

        console.log('loge out');

        localStorage.removeItem('api_token');

        this.loginService.isLoggedIn = false;

        this.socketService.disconnect();

        this.router.navigate(['login']);
  }

}
