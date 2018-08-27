import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import {SocketService} from '../chat/services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private formBuilder: FormBuilder,
      private loginService: UserLoginService,
      private router: Router,
      private socketService: SocketService
  ) {}

  public loginForm = this.formBuilder.group({
      email: ['superadmin@gmail.com', [Validators.required, Validators.email]],
      password: ['asdasd', [Validators.required]],
  });

  ngOnInit() {}

  public onSubmit(): void {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(data => {
                this.socketService.connect(data);

                this.router.navigate(['chat']);
            },
            err => {
                console.log('status ' + err.status + ' : ' + err.statusText);
        });

  }

}
