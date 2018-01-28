import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() img = '';
  @Input() pais = '';
  @Input() lugar = '';
  constructor() { }

  ngOnInit() {
  }

}
