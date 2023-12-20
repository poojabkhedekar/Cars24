import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCouponComponent } from './show-all-coupon.component';

describe('ShowAllCouponComponent', () => {
  let component: ShowAllCouponComponent;
  let fixture: ComponentFixture<ShowAllCouponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllCouponComponent]
    });
    fixture = TestBed.createComponent(ShowAllCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
