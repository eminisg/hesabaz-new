import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {distinctUntilChanged, mergeMap} from 'rxjs/operators';
import {UnregPayDataService} from '../../data-access/services/unreg-pay-data.service';
import {UnregPayStoreService} from '../../data-access/services/unreg-pay-store.service';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchantsComponent implements OnInit {
  merchantList$: any = this.unregPayStore.selectedMerchantCategory$
    .pipe(
      distinctUntilChanged(),
      mergeMap(res => {
        return this.unregPayDataService.getMerchants(res);
      })
    );

  constructor(
    private unregPayStore: UnregPayStoreService,
    private unregPayDataService: UnregPayDataService,
  ) {}

  ngOnInit() {

  }
}
