import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UnregPayStoreService} from '../../data-access/services/unreg-pay-store.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {BillingData} from '../../data-access/interfaces/billing-merchant.interface';

@Component({
  selector: 'app-single-billing',
  templateUrl: './single-billing.component.html',
  styleUrls: ['./single-billing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleBillingComponent implements OnInit {

  amount = {
    wholePart: '0',
    decimalPart: undefined,
    numberedAmount: 0,
  };
  singleBillingData = {
    paymentType: 'visa',
    amount: {},
  };


  billingInfo$: BehaviorSubject<BillingData | {}> = this.unregPayStore.singleBillingData$;

  constructor(
    private unregPayStore: UnregPayStoreService,
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.singleBillingData.amount = this.amount;
    this.unregPayStore.singleBillingData$.next(this.singleBillingData);
  }

  updateAmount() {
    const whole = parseFloat(this.amount.wholePart) || 0;
    const decimal = parseFloat(this.amount.decimalPart) || 0;

    const decimalValue = decimal / Math.pow(10, this.amount.decimalPart ? this.amount.decimalPart.length : 0);

    this.amount.numberedAmount = (whole + decimalValue) * 100;
  }
}
