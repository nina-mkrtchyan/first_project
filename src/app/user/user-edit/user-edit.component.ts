import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {genders} from '../../genders';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

    private user: User;
    public genders = genders;

    public editForm = new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(),
        gender: new FormControl(),
        phone_number: new FormControl()
    });

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.getUser(this.activatedRoute.snapshot.params.id)
            .subscribe( data => {
                console.log(data);
                this.user = data;

                this.editForm = this.formBuilder.group({
                        firstname: [data.firstname, [Validators.required]],

                        lastname: [data.lastname, [Validators.required]],

                        email: [data.email, [Validators.required, Validators.email]],

                        gender: [data.gender, [Validators.required]],

                        phone_number: [data.phone_number] });
                },
                err => {
                    console.log('status ' + err.status + ' : ' + err.statusText);
                });
    }

    public onEdit(): void {
        this.userService.updateUser(this.user)
            .subscribe( data => {
                console.log(data);
                this.router.navigate(['user']);
            }, err => {
                console.log(err.status);
            });
    }


}
