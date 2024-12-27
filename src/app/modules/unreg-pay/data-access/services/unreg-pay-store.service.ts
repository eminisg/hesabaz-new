import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnregPayStoreService {
  selectedMerchantCategory$ = new BehaviorSubject('mobile');
  merchantParameters$ = new BehaviorSubject({});
  singleBillingData$ = new BehaviorSubject({});

  constructor() {
  }


}
