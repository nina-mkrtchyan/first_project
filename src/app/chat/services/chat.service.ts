import { Injectable } from '@angular/core';
import {SocketService} from './socket.service';
import {Message, UserMessages} from '../message';
import {Subject} from 'rxjs';

@Injectable()
export class ChatService {

    public usersMessages: UserMessages[] = [];

    public selectedUserId = new Subject<number>();
    public newMessage = new Subject<void>();

    constructor(
        private socketService: SocketService
    ) {}

    public listenToMessages(): void {
        this.socketService.socket.on('message', (data: Message) => {
                if (this.socketService.user.id == data.receiverId) {
                    // console.log(data);

                    const userMessages: UserMessages = this.usersMessages
                        .find(val => val.user.id == data.senderId);

                    userMessages.messages.push(data);
                    userMessages.hasNewMessage = true;

                    console.log(this.usersMessages);

                    this.newMessage.next();
                }
            });
    }

    public sendMessage(msg: Message) {
        this.socketService.socket.on('room::1')
            .emit('message', {
                message: msg.text,
                receiverId: msg.receiverId
            });
    }

}
