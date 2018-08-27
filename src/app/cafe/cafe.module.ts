import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CafeListingComponent } from './cafe-listing/cafe-listing.component';
import { SharedModule } from '../shared/shared.module';
import { CafeService } from './services/cafe.service';
import { CafeEditComponent } from './cafe-edit/cafe-edit.component';
import { CafeCreateComponent } from './cafe-create/cafe-create.component';
import { CafeSingleComponent } from './cafe-single/cafe-single.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([{
                path: '',
                canActivate: [AuthGuard],
                component: CafeComponent,
            }, {
                path: 'create',
                canActivate: [AuthGuard],
                component: CafeCreateComponent
        }, {
                path: ':id/edit',
                canActivate: [AuthGuard],
                component: CafeEditComponent
        }, {
                path: ':id',
                canActivate: [AuthGuard],
                component: CafeSingleComponent,
        },
        ])
    ],
    declarations: [
        CafeComponent,
        CafeListingComponent,
        CafeEditComponent,
        CafeCreateComponent,
        CafeSingleComponent
    ],
    providers: [
        CafeService,
    ],
})
export class CafeModule { }
