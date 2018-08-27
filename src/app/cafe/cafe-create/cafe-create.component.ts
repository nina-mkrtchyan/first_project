import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationsService} from '../../services/validations.service';
import {CafeService} from '../services/cafe.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cafe-create',
    templateUrl: './cafe-create.component.html',
    styleUrls: ['./cafe-create.component.css']
})
export class CafeCreateComponent implements OnInit {

    public createForm: FormGroup;

    public alwaysOpenValues = ['yes', 'no'];


    constructor(
        private formBuilder: FormBuilder,
        private validationsService: ValidationsService,
        private cafeService: CafeService,
        private router: Router
    ) { }

    ngOnInit() {

    this.createForm = this.formBuilder.group({

            name: ['asdad', [Validators.required]],

            address: [],

            email: ['asdd@sf.com', [Validators.required, Validators.email]],

            phone_number: ['21231312', [Validators.required, this.validationsService.validatePhoneNumber]],

            region_id: ['546451435', [Validators.required]],

            confirm_code: ['5725546', [Validators.required]],

            always_open: []

        });

    }

    public onCreate() {
        // console.log(this.createForm.value, this.createForm.get('name').errors);
        //
        // if (this.createForm.valid) {
        //     this.cafeService.createCafe(this.createForm.value)
        //         .subscribe(data => {
        //             console.log(data);
        //             this.router.navigate(['cafe']);
        //         }, err => {
        //             console.log('status ' + err.status + ' : ' + err.statusText);
        //         });
        // }

    }

    public onChanged() {
        console.log('changed');
    }

}
