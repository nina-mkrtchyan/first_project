import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UserLoginService} from './services/user-login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    private publicRoutes = ['/login'];

    private user: any;

    constructor(
        private router: Router,
        private userLogonService: UserLoginService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (this.userLogonService.isLoggedIn) {
            return Promise.resolve(true);
        }

        return this.userLogonService.checkApiToken(localStorage.getItem('api_token'))
            .then((user: any) => {
                this.userLogonService.isLoggedIn = true;

                if (this.isPublicRoute(state.url)) {
                    this.router.navigate(['/']);
                }

                return true;
            })
            .catch((error: string) => {
                if (this.isPublicRoute(state.url.split('?')[0])) {
                    return true;
                }

                this.router.navigate(['/login']);

                return false;
            });
    }

    private isPublicRoute(url: string): boolean {
        for (const route of this.publicRoutes) {
            if (url.indexOf(route) === 0) {
                return true;
            }
        }
        return false;
    }
}
