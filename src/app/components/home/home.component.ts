import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $;
declare var paypal;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  show = false;
  textButton = 'Voy a tener suerte';
  constructor() { }

  ngOnInit() {
  }


  showLucky() {
    this.show = true;
    setTimeout(() => {
      $('body,html').animate({ scrollTop: $('app-lucky').offset().top }, 1000);

    }, 10);
  }

  // isFormValid(actions) {
  //   var result = true;
  //   return result ? actions.enable() : actions.disable();;
  // }

  ngAfterViewInit(): void {
  //   const payment_data = {
  //     total: '10.01',
  //     currency: 'EUR',
  //     cardata: {
  //       brand: 'lambo'
  //     }
  //   };
  //   paypal.Button.render({

  //     env: 'sandbox', // sandbox | production
  //     commit: true,
  //     client: {
  //       sandbox: 'ATGPkAZHrGYUZ6CPei-44TyHZum8tDHbP5yKUPSZ0N36otzX_uKnq3KA4_1iHTrmyHQSkVHVWf19ni_e'
  //     },
  //     style: {
  //       label: 'generic',
  //       size: 'medium',    // small | medium | large | responsive
  //       shape: 'rect',     // pill | rect
  //       color: 'silver',     // gold | blue | silver | black
  //       tagline: false
  //     },
  //     payment: (data, actions) => {
  //       return actions.payment.create({
  //         payment: {
  //             transactions: [
  //                 {
  //                     amount: { total: '10.00', currency: 'EUR' }
  //                 }
  //             ]
  //         }
  //     });
  //     },
  //     validate: (actions) => {
  //       this.isFormValid(actions);
  //     },
  //     // Wait for the payment to be authorized by the customer

  //     onAuthorize: function (data, actions) {

  //       // tslint:disable-next-line:no-shadowed-variable
  //       return actions.payment.get().then(function (paymentDetails) {

  //         // Show a confirmation using the details from paymentDetails
  //         // Then listen for a click on your confirm button
  //         return actions.payment.execute().then(function () {
  //           // Show a success page to the buyer
  //           console.log(data, 'onauthorize');
  //           console.log(payment_data);
  //         });
  //       });

  //     }

  //   }, '#paypal-button');

  }
}
