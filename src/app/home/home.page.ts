import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    logoapp: string = './assets/img/logoapp.png';

  constructor() {}

  ngOnInit() {
  }
}
