import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  goDown() {
    $('body,html').animate({ scrollTop: $('.content-section-a').offset().top - 100 }, 1000);
  }
}
