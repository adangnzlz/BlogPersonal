import { Component, OnInit } from '@angular/core';

import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { arrayAnimations } from 'app/global-components/array-animations';

declare var $;


@Component({
  selector: 'app-header-about',
  templateUrl: './header-about.component.html',
  styleUrls: ['./header-about.component.scss'],
  animations: arrayAnimations
})
export class HeaderAboutComponent implements OnInit, AfterViewInit {
  goneTitle = 'on';
  constructor() { }

  ngOnInit() {
  }


  goDown() {
    $('body,html').animate({ scrollTop: $('.content-section-a').offset().top - 100 }, 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.goneTitle = 'off';
    }, 500);

  }

}

