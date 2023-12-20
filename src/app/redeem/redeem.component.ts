import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  isFormArray,
} from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss'],
})
export class RedeemComponent {
  data: any;
  redeemForm: FormGroup;
  constructor(private fb: FormBuilder, private service: CarService) {
    this.redeemForm = this.fb.group({
      couponCode: ['', Validators.required],
      discount: [''],
    });
  }

  redeemsubmit() {
    let obj = {
      couponCode: this.redeemForm.controls['couponCode'].value,
    };
    this.service.redemCouponCode(obj).subscribe((res: any) => {
      if (res.data) {
        this.redeemForm.get('discount')?.patchValue(res.data.discount);
      }
      console.log(res);
    });
  }
}
