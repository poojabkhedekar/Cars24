import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-coupon',
  templateUrl: './show-all-coupon.component.html',
  styleUrls: ['./show-all-coupon.component.scss'],
})
export class ShowAllCouponComponent {
  allCoupons: any;
  data: any;
  allarray: any = [];
  constructor(
    private service: CarService,
    private dialogRef: MatDialogRef<ShowAllCouponComponent>,
    private router: Router
  ) {
    // this.dataFunc();
  }
}
