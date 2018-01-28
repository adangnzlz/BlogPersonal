import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';



declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
