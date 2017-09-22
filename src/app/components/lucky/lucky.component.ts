import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.scss']
})
export class LuckyComponent implements OnInit {

  class = 'container';
  show = false;
  @Input('show') set data(value: any) {
    this.show = value;
    setTimeout(() => {
      if (value) {
        this.class = 'container show';
      } else {
        this.class = 'container';
      }
    }, 10);
  };
  constructor() { }

  ngOnInit() {
  }

}
