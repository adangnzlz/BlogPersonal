import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $;
declare var paypal;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show = false;
  textButton = 'Voy a tener suerte';
  constructor() { }

  ngOnInit() {
  }


  showLucky() {
    this.show = true;
    setTimeout(() => {
      $('body,html').animate({ scrollTop: $('app-lucky').offset().top }, 1000);

    }, 10);
  }

}
