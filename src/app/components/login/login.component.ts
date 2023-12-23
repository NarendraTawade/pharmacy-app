import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router, private _sharedService : SharedService) { }

  ngOnInit(): void {
  }

  onLogin(userName : any, pass : any){
    this._sharedService.checkLoginDetails(userName, pass);
    
    if(userName == "User" && pass == 'User@123'){
      this._router.navigateByUrl('/admin/product');
    }
    else{
      alert('Please Check the admin credentials')
      this._router.navigateByUrl('/home')
    }
  }

}
