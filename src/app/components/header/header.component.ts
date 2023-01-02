import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private _countSubscription = new Subscription();
  countObject: any;
  productCount: any;
  retailerCount: any;
  constructor(
    private _sharedService: SharedService) {}
  ngOnInit(): void {
    this.subscribeCountObject();
  }
  
  ngOnDestroy(): void {
    this._countSubscription.unsubscribe();
  }
  subscribeCountObject() {
    this._sharedService.getcountSubjectObservable().subscribe((data: any) => {
      console.log(data);
      this.countObject = data;
      console.log(this.countObject.productCount);
      console.log(this.countObject.retailerCount);
      this.productCount = this.countObject.productCount;
      this.retailerCount = this.countObject.retailerCount;
    })
  }
}
