import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpService} from './http.service';
import {CommonService} from './common.service';
import {User} from '../user/user';
import {SocketService} from '../chat/services/socket.service';
import {environment} from '../../environments/environment';

@Injectable()

export class UserLoginService extends CommonService {
    public isLoggedIn: boolean;
    public user: User;

    constructor(
        private httpService: HttpService,
        private socketService: SocketService
        ) {
        super();
    }

    public login(email, password): Observable<any> {
        return this.httpService
        .post(`${environment.backendUrl}/api/v1/login`, {
                email: email,
                password: password,
              })
        .pipe(
            tap((user) => {
                this.isLoggedIn = true;

                this.user = user;

                this.httpService.setAuthToken(user);
            }),
        );
    }

    public checkApiToken(api_token): Promise<any> {
      return this.httpService
          .get(environment.backendUrl + '/api/v1/user/me', {
              api_token: api_token
          })
          .toPromise()
          .then( user => {
              this.socketService.connect(user);

              this.user = user;
        });
    }

}

