import { Injectable } from '@angular/core';
import { User } from '../../user/user';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    public socket;
    public user: User;

    constructor() {}

    public connect(user: User): void {
        this.user = user;

        this.socket = io.connect(environment.socketUrl, {
            query: 'userId=' + user.id
        });

        this.socket.on('connect', _ => {
            this.socket.emit('room', 'room::1');
        });
    }

    public disconnect(): void {
        this.socket.disconnect();
    }
}
