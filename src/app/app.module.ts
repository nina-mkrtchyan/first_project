import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppSimpleHttpComponent } from './app-simple-http/app-simple-http.component';

import { LoginComponent } from './login/login.component';
import { UserLoginService } from './services/user-login.service';
import { AuthGuard } from './auth.guard';
import { NonLettersDirective } from './login/non-letters.directive';
import { HttpService } from './services/http.service';
import { HeaderComponent } from './header/header.component';
import {SocketService} from './chat/services/socket.service';
import { SwatchTagComponent } from './swatchbook/swatch-tag/swatch-tag.component';
import { CustomTypeRowComponent } from './swatchbook/custom-type-row/custom-type-row.component';
import {SharedModule} from './shared/shared.module';
import { ManageSwatchTagsComponent } from './swatchbook/manage-swatch-tags/manage-swatch-tags.component';

@NgModule({
  declarations: [
      AppComponent,
      AppSimpleHttpComponent,
      NonLettersDirective,
      LoginComponent,
      HeaderComponent,
      SwatchTagComponent,
      CustomTypeRowComponent,
      ManageSwatchTagsComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forRoot([
              {   path: 'login',
                  canActivate: [AuthGuard],
                  component: LoginComponent },

              {   path: 'user',
                  loadChildren: './user/user.module#UserModule'
              },

              {   path: 'cafe',
                  loadChildren: './cafe/cafe.module#CafeModule'
              },

              {   path: 'chat',
                  loadChildren: './chat/chat.module#ChatModule'
              },

              { path: '', redirectTo: 'user', pathMatch: 'full' }
              ]),
  ],
    providers: [
        UserLoginService,
        AuthGuard,
        HttpService,
        SocketService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
