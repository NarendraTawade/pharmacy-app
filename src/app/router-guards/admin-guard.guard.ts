import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../modules/shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(private _sharedService: SharedService, private _router: Router) {}
  // canActivate(){
  //   if(this._sharedService.IsLoggedIn()){
  //     return true;
  //   }
  //   this._router.navigate(['/home'])
  //   return false;
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if ((localStorage.getItem('userName')== 'Narendra') && (localStorage.getItem('pass') == '020527')) {
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }
  }
}
