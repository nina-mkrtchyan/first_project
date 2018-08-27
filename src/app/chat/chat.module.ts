import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatComponent} from './chat.component';
import {AuthGuard} from '../auth.guard';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {UserService} from '../user/user.service';
import {ChatService} from './services/chat.service';
import { DialogComponent } from './dialog/dialog.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([{
          path: '',
          canActivate: [AuthGuard],
          component: ChatComponent,
          children: [
              {
                  path: ':id',
                  component: DialogComponent
              },
              {
                  path: '',
                  component: MainComponent
              },
          ]
      },
      ])
  ],
    declarations: [
        ChatComponent,
        DialogComponent,
        MainComponent
  ],
    providers: [
        UserService,
        ChatService
    ],
})
export class ChatModule { }
