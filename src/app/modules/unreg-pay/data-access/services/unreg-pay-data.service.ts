import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../../../../environments/environment';
import {AppService} from '../../../../data-access/services/app.service';
import {tap} from 'rxjs/operators';
import {BillingData} from '../interfaces/billing-merchant.interface';

const HOST_URL = `${API_URL}/unregistered`;

interface Category {
  name: string;
  logoPath: string;
  displayName: string;
}

class URLs {
  static readonly HESABAZ_UNREG_CATEGORIES: string = `${HOST_URL}/categories`;
  static readonly HESABAZ_UNREG_MERCHANT: any = (merchantName: string) => `${HOST_URL}/categories/${merchantName}/items`;
  static readonly HESABAZ_UNREG_PARAM: any = (merchantName: string) => `${HOST_URL}/merchants/${merchantName}/parameters`;
  static readonly HESABAZ_BILLING_INFO: any = (merchantName: string) => `${HOST_URL}/merchants/${merchantName}/billingInfo`;
}

@Injectable({
  providedIn: 'root'
})
export class UnregPayDataService {

  constructor(private http: HttpClient, private appService: AppService) {
  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(URLs.HESABAZ_UNREG_CATEGORIES);
  }

  getMerchants(merchantName: string) {
    return this.http.get(URLs.HESABAZ_UNREG_MERCHANT(merchantName));
  }

  getParams(merchantName: string): Observable<BillingData> {
    return this.http.get<BillingData>(URLs.HESABAZ_UNREG_PARAM(merchantName));
  }

  getBillingInfo(merchantName: any, params: any): Observable<any> {
    if (merchantName && merchantName !== '') {
      return this.http.get<any>(URLs.HESABAZ_BILLING_INFO(merchantName), {params}).pipe(
        tap(() => this.appService.createAuthorizationHeader(new HttpHeaders(), true))
      );
    }

  }
}
