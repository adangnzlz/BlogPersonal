import { Component, ViewChild, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  @ViewChild('p') popup: any;

  ngAfterViewInit(): void {

  }


  onContact() {
    window.location.href = 'mailto:adan.gonzalez.lopez@gmail.com?subject=Contacto desde Portfolio';
  }

  checkIfClose() {
    if (this.popup.isOpen()) {
      this.popup.close();
    }
  }
}
