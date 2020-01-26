import { DummyAuthService } from './dummy-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


 export class RolecheckerService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean
    {
      if(this.dummy.isadmin())
      {
      return true;
      }
      else
      {
          this.router.navigate(['/homeuser'])
          return false;
      }
    }
  constructor(private dummy : DummyAuthService, private router : Router) { }
}
