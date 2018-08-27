import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserService } from '../user/user.service';
import { ChatService } from './services/chat.service';
import {findIndex, map, take, tap} from 'rxjs/operators';
import { SocketService } from './services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMessages} from './message';
import {User} from '../user/user';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

    public loaded: boolean;

    public usersMessages$;

    public selectedUserId: number;
    public currentUserId: number;

    constructor(
      private userService: UserService,
      private socketService: SocketService,
      public chatService: ChatService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
        this.currentUserId = this.socketService.user.id;

        this.chatService.selectedUserId
            .subscribe( (id: number) => {
                console.log(id);
                setTimeout(() => {
                    this.selectedUserId = id;
                });

            });

        this.chatService.newMessage
            .subscribe( _ => {
                if (this.selectedUserId) {
                    const userMessages = this.chatService.usersMessages.find(val => val.user.id == this.selectedUserId);
                    userMessages.hasNewMessage = false;
                }
            });

        this.getUsers();

  }

  ngOnDestroy() {
        this.chatService.usersMessages = [];
  }

  private getUsers(): void {
      this.usersMessages$ = this.userService.getUsers()
          .pipe(
              map( data => data['items'].filter(obj => {
                      return obj.id !== this.currentUserId;
                  })
              ),
              map(data => {
                  data.forEach( (element: User) => {
                      this.chatService.usersMessages.push(new UserMessages(element));
                  });

                  return this.chatService.usersMessages;
              }),
              take(2),
              tap( _ => {
                  this.chatService.listenToMessages();

                  this.loaded = true;
              })
          );
  }

  public selectUser(id: number) {
      this.selectedUserId = id;

      const userMessages = this.chatService.usersMessages.find(val => val.user.id == this.selectedUserId);
      userMessages.hasNewMessage = false;

      this.router.navigate(['/chat/' + this.selectedUserId]);
  }

}
