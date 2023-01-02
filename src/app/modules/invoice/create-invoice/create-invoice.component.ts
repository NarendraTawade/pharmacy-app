import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css'],
})
export class CreateInvoiceComponent implements OnInit {
  productsData: any;
  retailersList: any;
  billArray: any = [];
  productById: any;
  rate: any;
  mrp: any;
  billAmount: any = 0;
  totalAmount: any = 0;
  retailerShopName: any;

  constructor(
    private _sharedService: SharedService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getRetailers();
    this.getProducts();
  }

  public getRetailers() {
    this._sharedService.getReatilersList().subscribe({
      next: (data: any) => {
        console.log(data);
        this.retailersList = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  public getProducts() {
    this._sharedService.getProducts().subscribe((data: any) => {
      this.productsData = data;
      console.log(this.productsData);
      // this.productsQuantity = this.productsData.length;
      // this._sharedService.getProductsCount(this.productsQuantity);
    });
  }
  getProductbyId(id: any) {
    this._sharedService.getProductbyId(id).subscribe((data: any) => {
      console.log(data);
      this.productById = data;
      console.log(this.productById.rate);
      this.rate = this.productById.rate;
      this.mrp = this.productById.mrp;
    });
  }

  update(e: any) {
    console.log(e);
    this.getProductbyId(e.target.value);
  }
  updateRetailerName(retailerShopName: any){
    console.log(retailerShopName.target.value);
    
    this.retailerShopName = retailerShopName.target.value;
    console.log(this.retailerShopName);
  }

  addItem(p: any, q: any) {
    console.log(p, q);

    if ((p.value == '') || (q.value == '')) {
      alert('Please ensure correct name and quantity');
    } 
    else {
      const obj = {
        name: this.productById?.name,
        qty: q?.value,
        mrp: this.productById?.mrp,
        rate: this.productById?.rate,
        amount: this.productById?.rate * q?.value,
      };
      this.billArray.push(obj);
      this._cd.detectChanges();
      console.log(this.billArray);

      this.billArray.forEach((item: any) => {
        this.billAmount = item.rate * item.qty;
      });

      this.totalAmount = this.billAmount + this.totalAmount;
      console.log(this.totalAmount);
    }
  }

  createInvoice(){
    this._sharedService.createInvoice(this.billArray).subscribe({
      next:(data: any)=>{
        
      },
      error: () =>{
        alert("Error while adding product!")
      }
    }
    )
  }
}
