import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  selectedMerchantCategory$ = new BehaviorSubject('mobile');
  merchantParametersForm$ = new BehaviorSubject({});
  merchantParameters$ = new BehaviorSubject({});
  singleBillingData$ = new BehaviorSubject({});
  constructor() {
  }
}
