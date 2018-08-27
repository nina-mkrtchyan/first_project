import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Message, UserMessages} from '../message';
import {SocketService} from '../services/socket.service';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    public userMessages: UserMessages;

    public selectedUserId: number;
    public currentUserId: number;
    public newMessage: string = '';

    constructor(
        private socketService: SocketService,
        private chatService: ChatService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.currentUserId = this.socketService.user.id;

        this.activatedRoute.params
            .subscribe((url) => {
                this.selectedUserId = +url.id;
                this.chatService.selectedUserId.next(this.selectedUserId);

                this.userMessages = this.chatService.usersMessages
                    .find((val: UserMessages) => val.user.id == this.selectedUserId);

                console.log(this.userMessages);
            });
    }

    public sendMessage() {
        const newMessage = new Message({
            senderId: this.currentUserId,
            text: this.newMessage,
            receiverId: this.selectedUserId,
        });

        this.userMessages.messages.push(newMessage);

        console.log(this.userMessages);

        this.chatService.sendMessage(newMessage);

        this.newMessage = '';
    }


}
