import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CarService } from '../car.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  sort: any;
  constructor(
    private dialogRef: MatDialogRef<SortComponent>,
    private service: CarService
  ) {}
  ngOnInit() {
    this.service.getCarInfo().subscribe((res: any) => {
      this.sort = res.data;
      console.log('sortsuceed', res);
    });
  }
  sortdata(item: any) {
    this.dialogRef.close(this.sort.value);
  }
}
