import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {genders} from '../../genders';
import {ValidationsService} from '../../services/validations.service';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    private user: User;

    public genders = genders;

    public createForm = this.formBuilder.group({

        firstname: ['', [Validators.required]],

        lastname: ['', [Validators.required]],

        email: ['', [Validators.required, Validators.email]],

        gender: ['1', [Validators.required, this.validationsService.validateGender]],

        phone_number: [],

    });

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private validationsService: ValidationsService
    ) { }

    ngOnInit() {
        console.log(this.genders);
    }

    public onCreate(): void {
        this.userService.createUser(this.createForm.value)
            .subscribe(data => {
                console.log(data);
                this.router.navigate(['user']);
                }, err => {
                console.log('status ' + err.status + ' : ' + err.statusText);
            });
    }
}
