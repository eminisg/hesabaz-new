import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-merchant-card',
  template: `
    <article class="provider">
        <ng-content></ng-content>
    </article>`,
  styleUrls: ['./merchant-card.component.scss']
})
export class MerchantCardComponent implements OnInit {
  @Input() redirectUrl: string;
  constructor() { }

  ngOnInit() {
  }

}
