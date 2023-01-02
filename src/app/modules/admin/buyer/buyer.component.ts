import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
})
export class BuyerComponent implements OnInit {
  addBuyerForm: FormGroup = new FormGroup({});
  retailersList: any;
  retailerId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._initiateAddBuyerForm();
    this.getRetailers();
  }

  private _initiateAddBuyerForm() {
    this.addBuyerForm = this._formBuilder.group({
      retailerName: ['', [Validators.required]],
      shopName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      gstIN: ['', [Validators.required]],
      address: this._formBuilder.array([
        this._formBuilder.group({
          shopNumber: ['', [Validators.required]],
          street: ['', [Validators.required]],
          landmark: ['', [Validators.required]],
          city: ['', [Validators.required]],
          district: ['', [Validators.required]],
          state: ['', [Validators.required]],
          pin: [, [Validators.required]],
        }),
      ]),
    });
  }

  private _initiatAddressFormArray() {
    return this._formBuilder.group({
      shopNumber: ['', [Validators.required]],
      street: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pin: [, [Validators.required]],
    });
  }

  get address(): FormArray {
    return this.addBuyerForm.get('address') as FormArray;
  }

  public addNewAddress() {
    let newAddress = this._initiatAddressFormArray();
    let addressFormArray = this.addBuyerForm.get('address') as FormArray;
    addressFormArray.push(newAddress);
  }

  public removeAddressArray(e: any) {
    let array = this.address;
    array.removeAt(e);
  }

  public getRetailers() {
    this._sharedService.getReatilersList().subscribe({
      next: (data: any) => {
        console.log(data);
        this.retailersList = data;
        this.retailerId = data.length;
        this._sharedService.getRetailersCount(data.length);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  public saveRetailer() {
    console.log(this.addBuyerForm);
    let retailerObject = {
      id: this.retailerId + 1,
      retailerName: this.addBuyerForm.value.retailerName,
      shopName: this.addBuyerForm.value.shopName,
      mobile: this.addBuyerForm.value.mobile,
      gstIN: this.addBuyerForm.value.gstIN,
      address: [
        {
          shopNumber: this.addBuyerForm.value.address[0].shopNumber,
          street: this.addBuyerForm.value.address[0].street,
          landmark: this.addBuyerForm.value.address[0].landmark,
          city: this.addBuyerForm.value.address[0].city,
          district: this.addBuyerForm.value.address[0].district,
          state: this.addBuyerForm.value.address[0].state,
          pin: this.addBuyerForm.value.address[0].pin,
        },
      ],
    };

    this._sharedService.saveRetailer(retailerObject).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getRetailers();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  logout() {
    localStorage.clear();
    this._router.navigateByUrl('/home');
  }
}
