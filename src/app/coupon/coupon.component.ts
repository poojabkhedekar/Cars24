import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CarService } from '../car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent {
  couponForm: FormGroup;
  coupon: any;
  allCoupons: any;
  couponsdata = false;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CouponComponent>,
    private service: CarService,
    private toaster: ToastrService
  ) {
    this.couponForm = this.fb.group({
      couponCode: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }
  ngOnInit() {}
  getCouponCode() {
    this.service.getAllCoupons().subscribe(
      (res: any) => {
        this.allCoupons = res.data;
        console.log('allCouponsSucceed', res);
        this.couponsdata = true;
      },
      (error) => {
        console.log('allCouponsFailed', error);
      }
    );
  }

  createCoupon() {
    // this.dialogRef.close(this.couponForm.value);
    let obj = {
      couponCode: this.couponForm.controls['couponCode'].value,
      discount: this.couponForm.controls['discount'].value,
    };
    this.service.createCoupon(obj).subscribe(
      (res: any) => {
        this.coupon = res;
        this.toaster.success('Coupon added Successfully');
        console.log('couponSucceed', res);
        this.couponsdata = true;
      },
      (error) => {
        console.log('couponfailed', error);
      }
    );
  }
  showallcoupons() {
    // const dialogRef = this.dialog.open(ShowAllCouponComponent, {
    //   height: '90%',
    //   width: '70%',
    //   data: { name: 'data' },
    // });
    // dialogRef.afterClosed().subscribe((res: any) => {
    //   console.log('allCoupon was closed', res);
    // });
  }
  delete(id: any) {
    this.service.deleteCoupons(id).subscribe(
      (res: any) => {
        console.log(res);
        this.toaster.success('Delete Coupon Successfully');

        this.getCouponCode();
      },
      (error) => {
        console.log('deleteFailed', error);
      }
    );
  }
  back() {
    this.couponsdata = false;
  }
}
