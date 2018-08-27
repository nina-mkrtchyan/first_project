import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/user';

@Injectable()
export class HttpService {
    private headers;

    constructor(private http: HttpClient) {
        this.setAuthToken();
    }

    public setAuthToken(user?: User): void {
        if (user) {
            localStorage.setItem('api_token', user.api_token.toString());

            this.headers =  new HttpHeaders({
                'Authorization': `Bearer ${user.api_token.toString()}`
            });
        }
        this.headers =  new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('api_token')}`
        });

    }

    public get(url: string, body?: any): Observable<any> {
        return this.http.get(url, {
                headers: this.headers,
                params: body
            },
        );
    }

    public post(url: string, body?: Object): Observable<any> {
        return this.http.post(url, body, { headers: this.headers } );
    }

    public delete(url: string, body?: Object): Observable<any> {
        return this.http.delete(url, body);
    }

    public put(url: string, body?: Object): Observable<any> {
        console.log(this.headers );
        return this.http.put(url, body);
    }

}
