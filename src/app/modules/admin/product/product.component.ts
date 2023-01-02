import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productsData: any;
  productsQuantity : any;

  constructor(private _sharedService : SharedService, private _router : Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this._sharedService.getProducts().subscribe((data : any)=>{
      this.productsData = data;
      console.log(this.productsData);
      this.productsQuantity = this.productsData.length;
      this._sharedService.getProductsCount(this.productsQuantity);
    })
  }

  getProductbyId(id : any){
    this._sharedService.getProductbyId(id).subscribe((data:any)=>{
      console.log(data);
    })
  }

  deleteProductById(id : any){
    this._sharedService.deleteProductById(id).subscribe((data:any)=>{
      console.log(data);
      this.getProducts();
    })
  }

  logout(){
    localStorage.clear();
    this._router.navigateByUrl('/home')
  }

}
