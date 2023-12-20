import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}
  getCarOptions() {
    const url = 'http://localhost:3000/getCarsOptions';
    return this.httpClient.get(url);
  }
  postCarInfo(body: any) {
    const url = 'http://localhost:3000/postCarInfo';
    return this.httpClient.post(url, body);
  }
  getCarInfo() {
    const url = 'http://localhost:3000/getCarInfo';
    return this.httpClient.get(url);
  }
  postLogin(body: any) {
    const url = 'http://localhost:3000/login';
    return this.httpClient.post(url, body);
  }
  createCoupon(body: any) {
    const url = 'http://localhost:3000/createCoupon';
    return this.httpClient.post(url, body);
  }
  getAllCoupons() {
    const url = 'http://localhost:3000/getAllCoupons';
    return this.httpClient.get(url);
  }
  deleteCoupons(id: any) {
    const url = 'http://localhost:3000/deleteCoupons/' + id;
    return this.httpClient.delete(url, id);
  }
  redemCouponCode(body: any) {
    const url = 'http://localhost:3000/redemCouponCode';
    return this.httpClient.post(url, body);
  }
}
