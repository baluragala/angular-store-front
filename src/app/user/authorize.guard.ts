import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from "./user.service";

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userService.loggedIn)
      return true;
    else {
      alert('Please login to checkout the cart');
      this.router.navigate(['/login'])
    }
  }
}
