import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MasterService {

  constructor(private http: Http) { }


  post(url: string, json: any): Observable<any> {
    const body = {
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      'data': json
    };
    const options = new RequestOptions({
      headers: new Headers({
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      })
    });

    return this.http.post(url, body, options)
      .map(response => {
        const result = response.json();
        return result;
      });
  }


  get(url: string, params?): Observable<any> {
    let finalUrl = '';
    if (params) {
       finalUrl = url + params;
    }else {
      finalUrl = url;
    }

    return this.http.get(finalUrl)
      .map(response => {
        return response;
      });
  }
}
