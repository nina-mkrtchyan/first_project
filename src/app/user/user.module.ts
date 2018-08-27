import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserComponent} from './user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {AuthGuard} from '../auth.guard';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {UserSingleComponent} from './user-single/user-single.component';
import {UserService} from './user.service';
import {UserListingComponent} from './user-listing/user-listing.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                canActivate: [AuthGuard],
                component: UserComponent,
            },

            {
                path: 'create',
                canActivate: [AuthGuard],
                component: CreateUserComponent,
            },

            {
                path: ':id/edit',
                canActivate: [AuthGuard],
                component: UserEditComponent,
            },

            {
                path: ':id',
                canActivate: [AuthGuard],
                component: UserSingleComponent,
            },

            {path: '', redirectTo: '', pathMatch: 'full'}
        ]),
    ],
    providers: [
        UserService
    ],
    declarations: [
        UserComponent,
        CreateUserComponent,
        UserSingleComponent,
        UserListingComponent,
        UserEditComponent,
    ]

})
export class UserModule { }
