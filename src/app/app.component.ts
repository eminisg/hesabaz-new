import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UnregPayDataService} from './modules/unreg-pay/data-access/services/unreg-pay-data.service';
import {Observable} from 'rxjs';
import {UnregPayStoreService} from './modules/unreg-pay/data-access/services/unreg-pay-store.service';

interface Category {
  name: string;
  logoPath: string;
  displayName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('navList', {static: false}) navList: ElementRef;
  categoriesList$: Observable<Category[]> = this.unregPayDataService.getCategories();
  activeCategoryIndex: number | null = 1;

  constructor(
    private unregPayDataService: UnregPayDataService,
    private unregPayStore: UnregPayStoreService,
  ) {
  }

  ngOnInit() {}

  activateRoute(index: number, merchantName: string): void {
    this.unregPayStore.selectedMerchantCategory$.next(merchantName);
    this.activeCategoryIndex = index;
  }
}
