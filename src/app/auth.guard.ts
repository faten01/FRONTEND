import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { Observable, take, map } from 'rxjs';

export class AuthGuard  {





    constructor(private auth:AuthService, private router:Router){}
  
    /*canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.auth.status().pipe(take(1),map((loggedIn:boolean)=>{
       if(loggedIn){
         return true;
       }else{
        return this.router.createUrlTree(['/login']);
       }
     }));
    }*/
}