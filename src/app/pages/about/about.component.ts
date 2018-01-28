
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { arrayAnimations } from 'app/global-components/array-animations';

declare var $;
declare var Typed;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: arrayAnimations
})
export class AboutComponent implements OnInit, AfterViewInit {

  showingtravels = 'on';
  active = false;
  showtravels = false;
  constructor() { }
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    window.onbeforeunload = function (event) {
      window.scrollTo(0, 0);
    };

    setTimeout(() => {
      setTimeout(() => {
        this.startTyping();
      }, 600);
    }, 500);
    $(window).on('resize scroll', () => {
      if (this.isInViewport() && !this.active) {
        this.active = true;
        this.startTyping2();
      }
    });
  }

  showTravels() {
    this.showtravels = true;
    setTimeout(() => {
      $('body,html').animate({ scrollTop: $('#about').offset().top }, 1500);
      this.showingtravels = 'off';
    }, 10);
  }

  private startTyping() {
    // tslint:disable-next-line:no-unused-expression
    new Typed('#typing', {
      strings: ['#Front-End Architect', '#Web', '#App', '#FullStack Developer'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: false,
      showCursor: false,
      backDelay: 1500,
    });
  }

  private startTyping2() {
    // tslint:disable-next-line:no-unused-expression
    new Typed('#notodo', {
      strings: ['No todo en esta vida es trabajar...'],
      typeSpeed: 40,
      backSpeed: 40,
      loop: false,
      showCursor: true,
      backDelay: 1500,
    });
    setTimeout(function () {
      $('.extra').addClass('showing');
    }, 2500);
  }

  private isInViewport() {
    let result = false;
    if ($('#notodo') && $('#notodo').offset()) {
      const elementTop = $('#notodo').offset().top;
      const elementBottom = elementTop + $('#notodo').outerHeight();

      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      result = elementBottom > viewportTop && elementTop < viewportBottom;
    }
    return result;
  };
}
