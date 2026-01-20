import { HttpClient } from '@angular/common/http';
import { inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export const POLITICIAN_STATE_KEY = makeStateKey<any>('politicians');

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private readonly URL = 'http://ftdata:8080/api';
  private httpclient = inject(HttpClient);

  getPoliticianInfo(id: number): Observable<any> {
    return this.httpclient.get(this.URL.concat('/politicianInfo/', id.toString()));
  }

  getPoliticianVotes(id: number): Observable<any> {
    return this.httpclient.get(this.URL.concat('/politicianVotes/', id.toString()));
  }

  getData(): Observable<any> {
    return this.httpclient.get(this.URL.concat('/politicians'));
  }
}
