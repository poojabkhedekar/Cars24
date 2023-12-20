import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { ToastrService } from 'ngx-toastr';
import { CouponComponent } from '../coupon/coupon.component';
import { MatDialog } from '@angular/material/dialog';
import { RedeemComponent } from '../redeem/redeem.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  allCars: any;
  states: any;
  codedata: any = [];
  adminform: FormGroup;
  data: any = [];
  carData: any;
  carDataPost: any;
  city: any = [
    'Pune',
    'Nashik',
    'Nagpur',
    'ahamadpur',
    'amritsar',
    'ludhiyana',
    'baramati',
    'vimannagar',
  ];
  constructor(
    private fb: FormBuilder,
    private service: CarService,
    private toaster: ToastrService,
    private dialog: MatDialog
  ) {
    this.adminform = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      makeYear: ['', Validators.required],
      variant: ['', Validators.required],
      kmDriven: ['', Validators.required],
      features: ['', Validators.required],
      transmission: ['', Validators.required],
      bodyType: ['', Validators.required],
      color: ['', Validators.required],
      seats: ['', Validators.required],
      owner: ['', Validators.required],
      state: ['', Validators.required],
      stateCode: ['', Validators.required],
      city: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.service.getCarOptions().subscribe(
      (res: any) => {
        this.allCars = res.data;
        this.carData = this.allCars[0].brandList;
        this.states = this.allCars[0].states;
        console.log('getCarInfoSucced', res);
      },
      (error) => {
        console.log('getCarInfoFailed', error);
      }
    );
  }
  onBrandSelect() {
    let modelList: any = [];
    this.carData.forEach((element: any) => {
      if (element.brand == this.adminform.controls['brand'].value) {
        modelList = element.models;
      }
    });
    this.data = modelList;
  }
  onStateSelect() {
    let code: any = [];
    this.states.forEach((element: any) => {
      if (element.state == this.adminform.controls['state'].value) {
        code = element.codes;
      }
    });
    this.codedata = code;
  }
  submit() {
    let obj = this.adminform.value;
    let postdata = {
      brand: obj.brand,
      model: obj.model,
      makeYear: obj.makeYear,
      variant: obj.variant,
      kmDriven: obj.kmDriven,
      features: obj.features,
      transmission: obj.transmission,
      bodyType: obj.bodyType,
      color: obj.color,
      seats: obj.seats,
      owner: obj.owner,

      state: obj.state,
      stateCode: obj.stateCode,
      city: obj.city,
      price: obj.price,
    };
    this.service.postCarInfo(postdata).subscribe(
      (res: any) => {
        this.carDataPost = res;
        this.toaster.success('data added sucessfully');
        console.log('postCarInfosucced', res);
      },
      (error) => {
        console.log('postCarInfoFailed', error);
      }
    );
  }
  createCoupons() {
    const dialogRef = this.dialog.open(CouponComponent, {
      height: '90%',
      width: '70%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log('coupon was closed', res);
    });
  }
  redeem() {
    const dialogRef = this.dialog.open(RedeemComponent, {
      height: '90%',
      width: '70%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log('coupon was closed', res);
    });
  }
}
