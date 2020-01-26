import { DummyAuthService } from './dummy-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean
  {
    if(this.dummy.isloggedin())
    {
    return true;
    }
    else
    {
        this.router.navigate(['/login'])
        return false;
    }
  }

  

  constructor(private router : Router, private dummy : DummyAuthService) { }
}
