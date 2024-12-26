import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UnregPayDataService} from './modules/unreg-pay/data-access/services/unreg-pay-data.service';
import {from, Observable, of, timer} from 'rxjs';
import {UnregPayStoreService} from './modules/unreg-pay/data-access/services/unreg-pay-store.service';
import {concatAll, every, filter, map, mergeMap, take} from 'rxjs/operators';

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
  users = of([
    {id: 1, nme: 'A', age: 4},
    {id: 2, nme: 'B', age: 18},
    {id: 3, nme: 'C', age: 74},
    {id: 4, nme: 'D', age: 7},
    {id: 5, nme: 'E', age: 47},
  ]);


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
