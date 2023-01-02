import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NUMBERS_ONLY_PATTERN,
  PRODUCT_PATTERN,
  QUANTITY_PATTERN,
} from '../../shared/patterns/patterns';
import { SharedService } from '../../shared/services/shared.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css'],
})
export class AddProductModalComponent implements OnInit {
  addProductForm: FormGroup = new FormGroup({});
  isAddProductFormSubmitted: boolean = false;

  @Input() length: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this._initiateAddProductForm();
  }

  private _initiateAddProductForm() {
    this.addProductForm = this._formBuilder.group({
      productName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(PRODUCT_PATTERN)]],
      mrp: [
        '',
        [Validators.required, Validators.pattern(NUMBERS_ONLY_PATTERN)],
      ],
      quantity: [
        '',
        [Validators.required, Validators.pattern(QUANTITY_PATTERN)],
      ],
      manufacturer: ['', [Validators.required]],
      mfgDate: ['', [Validators.required]],
      expDate: ['', [Validators.required]],
      rate: [
        '',
        [Validators.required, Validators.pattern(NUMBERS_ONLY_PATTERN)],
      ],
    });
  }

  public addProduct() {
    this.isAddProductFormSubmitted = true;
    console.log(this.addProductForm);
    if (this.addProductForm.status == 'VALID') {
      const productObject = {
        id: this.length + 1,
        name: this.addProductForm.value.productName,
        mrp: this.addProductForm.value.mrp,
        quantity: this.addProductForm.value.quantity,
        manufacturer: this.addProductForm.value.manufacturer,
        mfgDate: this.addProductForm.value.mfgDate,
        expDate: this.addProductForm.value.expDate,
        rate: this.addProductForm.value.rate,
      };
      this._sharedService.saveProduct(productObject).subscribe({
        next: (data: any) => {
          console.log(data);
          location.reload();
        },
        error: (err: any) => {

        },
      });
    } else {
      alert('Please fill in the valid details and submit again !!!');
    }
    // console.log(this.addProductForm);
    // console.log(this.addProductForm.controls['rate']['errors']!['pattern']);
  }
}
