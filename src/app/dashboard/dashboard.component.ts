import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { FilterComponent } from '../filter/filter.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { variableConstants } from '../dummyCar';
import { SortComponent } from '../sort/sort.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  search: any;
  wishArray: any = [];
  addTOWishList: any;
  removeWishList: any;
  dataCars: any = [];
  searchcardata: any;
  newCarData: any = [];
  dataArray: any = [];
  bookCarArray: any = [];
  newBook: any = [];
  newdate: any;
  cartArray: any = [];

  constructor(
    private service: CarService,
    private dialog: MatDialog,
    private toaster: ToastrService,
    private datePipe: DatePipe
  ) {
    const data = localStorage.getItem('wishCar');
    if (data) {
      this.dataArray = JSON.parse(data);
    }
    const book = localStorage.getItem('carBooking');
    if (book) {
      this.newBook = JSON.parse(book);
    }
    const cart = localStorage.getItem('cartArray');
    if (cart) {
      this.cartArray = JSON.parse(cart);
    }

    // const cart=localStorage.getItem()
  }
  ngOnInit() {
    const book1 = localStorage.getItem('cars');
    if (book1) {
      this.dataCars = JSON.parse(book1);
    }
    const data2 = localStorage.getItem('wish');
    if (data2) {
      this.dataCars = JSON.parse(data2);
    }
    const cart1 = localStorage.getItem('cart');
    if (cart1) {
      this.dataCars = JSON.parse(cart1);
    }
    this.discountCar();

    // this.service.getCarInfo().subscribe(
    //   (res: any) => {
    //     this.dataCars = res.data;
    //     this.newCarData = this.dataCars;
    //     console.log('dataSucessed', res);
    //   },
    //   (error) => {
    //     console.log('dataFailed', error);
    //   }
    // );
  }
  discountCar() {
    this.dataCars.forEach((item: any) => {
      if (item.brand == variableConstants.MarutiSuzuki) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Chevrolet) {
        item.discountPrice = item.price - item.price * 0.2;
      } else if (item.brand == variableConstants.Fiat) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Ford) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Honda) {
        item.discountPrice = item.price - item.price * 0.2;
      } else if (item.brand == variableConstants.Hyundai) {
        item.discountPrice = item.price - item.price * 0.4;
      } else if (item.brand == variableConstants.Kia) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Mahindra) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Renault) {
        item.discountPrice = item.price - item.price * 0.2;
      } else if (item.brand == variableConstants.Tata) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Toyota) {
        item.discountPrice = item.price - item.price * 0.1;
      } else if (item.brand == variableConstants.Volkswagen) {
        item.discountPrice = item.price - item.price * 0.1;
      }
    });
  }
  searchcar() {
    let car: any = [];
    this.dataCars = this.dataCars.filter((element: any) => {
      if (
        element.brand.toLowerCase().includes(this.search.toLowerCase()) ||
        element.model.toLowerCase().includes(this.search.toLowerCase())
      ) {
        return (car = element.brand);
      }
      this.searchcardata = car;
    });
  }
  reset() {
    this.dataCars = this.newCarData;
  }
  filterDialog() {
    const dialogRef = this.dialog.open(FilterComponent, {
      height: '70%',
      width: '90%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log('filter was closed', res);
      this.filterData(res);
    });
  }
  filterData(res: any) {
    this.dataCars = this.newCarData;
    if (res.brand) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.brand == res.brand;
      });
    }
    if (res.model) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.model == res.model;
      });
    }

    if (res.makeYear) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.makeYear == res.makeYear;
      });
    }
    if (res.variant) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.variant == res.variant;
      });
    }
    if (res.kmDriven) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.kmDriven == res.kmDriven;
      });
    }
    if (res.features) {
      this.dataCars = this.dataCars.filter((item: any) => {
        let count = 0;
        if (res.features.length > 0) {
          res.features.forEach((feature: any) => {
            if (item.features.indexOf(feature) >= 0) {
              count = count + 1;
            }
          });
        }
        if (count == res.features.length) {
          return item;
        }
      });
      // console.log("")
    }
    if (res.transmission) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.transmission == res.transmission;
      });
    }
    if (res.bodyType) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.bodyType == res.bodyType;
      });
    }
    if (res.color) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.color == res.color;
      });
    }
    if (res.seats) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.seats == res.seats;
      });
    }
    if (res.owner) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.owner == res.owner;
      });
    }
    if (res.state) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.state == res.state;
      });
    }
    if (res.stateCode) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.stateCode == res.stateCode;
      });
    }
    if (res.city) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.city == res.city;
      });
    }
    if (res.price) {
      this.dataCars = this.dataCars.filter((item: any) => {
        return item.price == res.price;
      });
    }
  }
  bookCar(item: any) {
    let data = {
      ...item,
      date: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };
    this.bookCarArray.push(data);
    if (this.bookCarArray.length > 0) {
      let exist = false;
      this.bookCarArray.forEach((element: any) => {
        if (
          item.brand == element.brand &&
          item.model == element.model &&
          element.bookCar
        ) {
          exist = true;
        }
      });
      if (exist) {
        this.toaster.success('Car Already Booked');
      } else {
        item.bookCar = true;
        this.toaster.success('car Booked Successfully');
        this.bookCarArray.push(item);
      }
    } else {
      item.bookCar = true;
      this.toaster.success('car Booked Successfully');

      this.bookCarArray.push(item);
    }
    localStorage.setItem('carBooking', JSON.stringify(this.bookCarArray));
    console.log(this.bookCarArray);
    console.log('pooja', this.dataCars);
    localStorage.setItem('cars', JSON.stringify(this.dataCars));
  }
  addToCart(item: any) {
    let data = {
      ...item,
      quantity: 1,
      totalprice: item.price,
    };
    // this.cartArray.push(data);
    if (this.cartArray.length > 0) {
      let exist = false;
      this.cartArray.forEach((element: any) => {
        if (item.brand == element.brand && item.model == element.model) {
          exist = true;
          element.quantity++;
          element.totalprice = element.price * element.quantity;
        }
      });
      if (!exist) {
        this.toaster.success('car Added to cart Successfully');
        this.cartArray.push(data);
      }
    } else {
      this.toaster.success('car Added to cart Successfully');

      this.cartArray.push(data);
    }
    localStorage.setItem('cartArray', JSON.stringify(this.cartArray));
    localStorage.setItem('cart', JSON.stringify(this.dataCars));

    console.log(this.cartArray);
  }
  total: any;

  addWishList(item: any) {
    if (this.wishArray.length > 0) {
      let exist = false;
      this.wishArray.forEach((element: any) => {
        if (item.brand == element.brand && element.wishList == true) {
          exist = true;
        }
      });
      if (exist) {
        this.toaster.success('Car already in wishList');
      } else {
        item.wishList = true;
        this.toaster.success('Car added in  your wishList');

        this.wishArray.push(item);
      }
    } else {
      item.wishList = true;
      this.toaster.success('Car added in  your wishList');

      this.wishArray.push(item);
    }
    localStorage.setItem('wishCar', JSON.stringify(this.wishArray));
    console.log('kkk', this.dataCars);
    localStorage.setItem('wish', JSON.stringify(this.dataCars));
  }
  sort() {
    const dialogRef = this.dialog.open(SortComponent, {
      height: '50%',
      width: '50%',
      data: { name: 'data' },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log('sort was closed', res);
    });
  }
}
