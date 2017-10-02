import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $;
declare var Typed;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [trigger('layertitle', [
    state('on', style({
      transform: 'translateX(-120%)'
    })),
    state('off', style({
      transform: 'translateX(0%)'
    })),
    transition('on => off', animate('.6s 0.6s ease-in-out'))
  ]),
  trigger('layersubtitle', [
    state('on', style({
      transform: 'translateX(400%)'
    })),
    state('off', style({
      transform: 'translateX(0%)'
    })),
    transition('on => off', animate('.6s 0.6s ease-in-out'))
  ]),
  trigger('layerparagraph', [
    state('on', style({
      opacity: 0
    })),
    state('off', style({
      opacity: 1
    })),
    transition('on => off', animate('.6s 1.2s ease-in-out'))
  ]),
  trigger('layertravels', [
    state('on', style({
      opacity: 0,
      // transform: 'translateX(-120%)'
    })),
    state('off', style({
      opacity: 1,
      // transform: 'translateX(0%)'
    })),
    transition('on => off', animate('0s 1s ease-in-out'))
  ]),
  trigger('layertravels2', [
    state('on', style({
      opacity: 0,
      // transform: 'translateX(120%)'
    })),
    state('off', style({
      opacity: 1,
      // transform: 'translateX(0%)'
    })),
    transition('on => off', animate('0s 1.3s ease-in-out'))
  ]),
  trigger('layertravels3', [
    state('on', style({
      opacity: 0,
      // transform: 'translateX(-120%)'
    })),
    state('off', style({
      opacity: 1,
      // transform: 'translateX(0%)'
    })),
    transition('on => off', animate('0.6s 1s ease-in-out'))
  ]),
  trigger('layerparagraph2', [
    state('on', style({
      opacity: 0
    })),
    state('off', style({
      opacity: 1
    })),
    transition('on => off', animate('1.2s 1.2s ease-in-out'))
  ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  goneTitle = 'on';
  showingtravels = 'on';
  active = false;
  showtravels = false;
  constructor() { }
  ngOnInit() {

  }


  goDown() {
    $('body,html').animate({ scrollTop: $('.content-section-a').offset().top - 100 }, 1000);
  }

  ngAfterViewInit(): void {
    window.onbeforeunload = function (event) {
      window.scrollTo(0, 0);
    };

    setTimeout(() => {
      this.goneTitle = 'off';
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
