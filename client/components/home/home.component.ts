import { Component }            from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.pug',
  styleUrls: ['./home.scss']
})

export class HomeComponent {
  constructor() {

    console.log('Home component loaded');
  }
}