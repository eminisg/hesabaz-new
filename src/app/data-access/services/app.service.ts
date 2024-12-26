import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, environment} from '../../../environments/environment';

class URLs {
  static readonly GET_TOKEN: string = `${API_URL}/public/access/create'`;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getAccessToken() {
    const body = {
      clientId: window.innerWidth < 736 ? environment.client_mob_id : environment.client_web_id,
      responseUrl: 'http://localhost:4200/#/direct-pay'
    };
    return this.http.post(URLs.GET_TOKEN, body);
  }

  createAuthorizationHeader(headers: HttpHeaders, isPublic?: boolean) {
    const lang = (localStorage.getItem('lang') && localStorage.getItem('lang') !== 'null') ? localStorage.getItem('lang') : 'az';
    const accessToken = localStorage.getItem('unregAccessToken');
    headers = headers.append('Accept-Language', lang);


    headers.append('Accept', 'application/json');

    if (accessToken && !isPublic) {
      headers = headers.append(environment.authKey, 'bearer ' + accessToken);
    }
    headers = headers.append('Oauth-Client', window.innerWidth < 736 ? environment.client_mob_id : environment.client_web_id);

    return headers;
  }
}
