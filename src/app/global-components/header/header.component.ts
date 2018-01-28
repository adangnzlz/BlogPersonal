import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  closeResult: string;
  acceptCookies: boolean;
  @ViewChild('p') popup: any;
  @ViewChild('pCookies') popupCookies: any;
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (localStorage.acceptCookies !== 'true') {
        this.popupCookies.open();
      } else {
        this.acceptCookies = true;
      }
    }, 1000);
  }


  isActive(path) {
    return this.location.path() === path;
  }

  isActiveHome(path) {
    return this.location.path() !== '/about';
  }
  onContact() {
    window.location.href = 'mailto:adan.gonzalez.lopez@gmail.com?subject=Contacto desde Portfolio';
  }

  checkIfClose() {
    if (this.popup.isOpen()) {
      this.popup.close();
    }
  }

  onAcceptCookies() {
    this.acceptCookies = true;
    localStorage.removeItem('acceptCookies');
    localStorage.setItem('acceptCookies', 'true');
    this.popupCookies.close();
  }

  toggleCookies() {
    if (this.acceptCookies) {
      this.popupCookies.toggle();
    } else {
      this.popupCookies.open();
    }
  }

  closeCookies() {
    if (this.acceptCookies) {
      this.popupCookies.close();
    }
  }
}
