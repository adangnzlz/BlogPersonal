import { Component, ViewChild, AfterViewInit } from '@angular/core';




declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  closeResult: string;
  acceptCookies: boolean;
  title = 'app';
  @ViewChild('p') popup: any;
  @ViewChild('pCookies') popupCookies: any;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (localStorage.acceptCookies !== 'true') {
        this.popupCookies.open();
      } else {
        this.acceptCookies = true;
      }
    }, 1000);
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
