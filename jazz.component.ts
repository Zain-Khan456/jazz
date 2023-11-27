import { Component } from '@angular/core';

@Component({
  selector: 'app-jazz',
  templateUrl: './jazz.component.html',
  styleUrls: ['./jazz.component.css'],
})
export class JazzComponent {
  cardsdata = [
    { img: '/assets/jazzcardicon1.svg', title: 'VPMS' },
    { img: '/assets/jazzcardicon2.svg', title: 'Sourcing & Contracting' },
    { img: '/assets/jazzcardicon3.svg', title: 'Procurement Operations' },
    { img: '/assets/jazzcardicon4.svg', title: 'Accounts Payable' },
    { img: '/assets/jazzcardicon5.svg', title: 'Insurance Claim' },
    { img: '/assets/jazzcardicon6.svg', title: 'Taxation' },
    { img: '/assets/jazzcardicon7.svg', title: 'Internal Controls' },
  ];
  modulecard = [
    { img: '/assets/moduleicon1.svg', title: 'Action' },
    { img: '/assets/moduleicon2.svg', title: 'User' },
    { img: '/assets/moduleicon3.svg', title: 'Roles' },
    { img: '/assets/moduleicon4.svg', title: 'Partner' },
    { img: '/assets/moduleicon567.svg', title: 'Reports' },
    { img: '/assets/moduleicon567.svg', title: 'BA Module' },
    { img: '/assets/moduleicon567.svg', title: 'Commercials' },
  ];
}
