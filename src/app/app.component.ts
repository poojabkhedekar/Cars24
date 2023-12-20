import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'newcars';

  constructor() {
    this.dataFunc().then((res: any) => {});
  }

  async dataFunc() {
    const a = await this.fetch();
    console.log('after');
    let b = {
      name: 'Sam',
      city: 'Pune',
    };
    let c: any = {
      name: 'Pooja',
    };
    c.__proto__ = b;

    console.log(c.city);
    // console.log(b.name);
    return a;
  }

  fetch() {
    setTimeout(() => {
      console.log('iN AWAIT');
      return 'Hello';
    }, 2000);
  }
}
