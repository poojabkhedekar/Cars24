import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterForm: FormGroup;
  allCars: any;
  carData: any;
  states: any;
  codedata: any = [];
  data: any = [];
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
    private dialogRef: MatDialogRef<FilterComponent>
  ) {
    this.filterForm = this.fb.group({
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
        console.log('filterSucceed', res);
      },
      (error) => {
        console.log('filterFailed', error);
      }
    );
  }
  onBrandSelect() {
    let modelList: any = [];
    this.carData.forEach((element: any) => {
      if (element.brand == this.filterForm.controls['brand'].value) {
        modelList = element.models;
      }
    });
    this.data = modelList;
  }
  onStateSelect() {
    let code: any = [];
    this.states.forEach((element: any) => {
      if (element.state == this.filterForm.controls['state'].value) {
        code = element.codes;
      }
    });
    this.codedata = code;
  }
  filter() {
    this.dialogRef.close(this.filterForm.value);
  }
}
