import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {CommonService} from '../services/common.service';
import {HttpService} from '../services/http.service';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService extends CommonService {

    constructor(
        private httpService: HttpService
    ) {
        super();
    }

    public getUser(id: string): Observable<any> {
        return this.httpService.get(environment.backendUrl + '/admin/api/v1/user/' + id);
    }

    public getUsers(searchKey = '', page: number = 1): Observable<any> {
        return this.httpService
            .get(environment.backendUrl + '/admin/api/v1/user', {
                page: page.toString(),
                search_key: searchKey
            });
    }

    public createUser(user: User): Observable<any> {
        return this.httpService
            .post(environment.backendUrl + '/admin/api/v1/user', user);
    }

    public updateUser(user: User): Observable<any> {
        return this.httpService
            .put(environment.backendUrl + '/admin/api/v1/user/'  + user.id,
                user);
    }

    public deleteUser(id: number): Observable<any> {
        return this.httpService
            .delete(environment.backendUrl + '/admin/api/v1/user/' + id);
    }
}

