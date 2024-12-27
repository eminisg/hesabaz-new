import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {distinctUntilChanged, switchMap} from 'rxjs/operators';
import {UnregPayDataService} from '../../data-access/services/unreg-pay-data.service';
import {UnregPayStoreService} from '../../data-access/services/unreg-pay-store.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchantsComponent implements OnInit {
  merchantList$: Observable<any> = this.unregPayStore.selectedMerchantCategory$
    .pipe(
      distinctUntilChanged(),
      switchMap(res => {
        return this.unregPayDataService.getMerchants(res);
      }),
    );

  constructor(
    private unregPayStore: UnregPayStoreService,
    private unregPayDataService: UnregPayDataService,
    private router: Router,
  ) {
  }

  ngOnInit() {

  }

  navigateManagement(type: 'Subcategory' | 'LARGE_MERCHANT', name: string) {
    if (type === 'Subcategory') {
      this.unregPayStore.selectedMerchantCategory$.next(name);
    } else {
      this.router.navigate([`unreg-payment/parameters/${name}`]);
    }
  }
}
