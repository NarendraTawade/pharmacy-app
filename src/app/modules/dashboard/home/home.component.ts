import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _countSubscription = new Subscription();
  countObject: any;
  productCount: any;
  retailerCount: any;

  constructor(
    private _sharedService: SharedService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeCountObject();
  }
  ngOnDestroy(): void {
    this._countSubscription.unsubscribe();
  }

  subscribeCountObject() {
    console.log('ghgh');

    // this._countSubscription.add(
      this._sharedService.getcountSubjectObservable().subscribe((data: any) => {
        console.log(data);
        this.countObject = data;
        console.log(this.countObject.productCount);
        console.log(this.countObject.retailerCount);
        this.productCount = this.countObject.productCount;
        this.retailerCount = this.countObject.retailerCount;
        this._cd.detectChanges();
      })
    // );
  }
}
