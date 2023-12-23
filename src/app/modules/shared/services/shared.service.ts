import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl_List } from '../configs/api-url.config';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _countObject : any = {};
  private _countSubject = new Subject();
  productCount: any;
  retailerCount: any;

  constructor(private _httpClient : HttpClient) { }

  public getcountSubjectObservable(){
    return this._countSubject.asObservable();
  }
  public triggercountSubject(){
    this._countSubject.next(this._countObject);
  }

  checkLoginDetails(userName : any, pass : any ){
    if(userName == 'User' && pass == 'User@123'){
      localStorage.setItem('userName', 'Narendra');
      localStorage.setItem('pass', '020527');
      return true;
    }
    else{
      return false;
    }
  }
  
  IsLoggedIn(){
    return true;
  }

  public getProducts (){
    return this._httpClient.get(baseUrl_List.GET_PRODUCT_LIST)
  }

  public getProductbyId(id:any){
    return this._httpClient.get(baseUrl_List.GET_PRODUCT_BY_ID + id)
  }

  public deleteProductById(id : any){
    return this._httpClient.delete(baseUrl_List.DELETE_PRODUCT + id)
  }

  public saveProduct (data : any){
    return this._httpClient.post(baseUrl_List.POST_PRODUCT, data)
  }

  public getReatilersList () {
    return this._httpClient.get(baseUrl_List.GET_RETAILERS_LIST)
  }

  public saveRetailer(e:any){
    return this._httpClient.post(baseUrl_List.POST_RETAILER_DETAILS , e)
  }

  public getProductsCount(e : any){
    console.log(e);
    this.productCount = e;
    this._countObject ={
      productCount : this.productCount,
      retailerCount : this.retailerCount
    }  
    this.triggercountSubject();
  }

  public getRetailersCount(e : any){
    this.retailerCount = e;
    this._countObject ={
      productCount : this.productCount,
      retailerCount : this.retailerCount
    }
    console.log(this._countObject);
    this.triggercountSubject();
  }

  public createInvoice(data : any){
    return this._httpClient.post(baseUrl_List.CREATE_INVOICE, data);
  }


}
