import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export const POLITICIAN_STATE_KEY = makeStateKey<any>('politicians');

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private readonly URL = 'http://localhost:8080/api';
  private httpclient = inject(HttpClient);
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);

  getPoliticianInfo(id: number): Observable<any> {
    return this.httpclient.get(this.URL.concat('/politicianInfo/', id.toString()));
  }

  getPoliticianVotes(id: number): Observable<any> {
    return this.httpclient.get(this.URL.concat('/politicianVotes/', id.toString()));
  }

  getData(): Observable<any> {
    // If running in the browser and state exists → use it
    if (
      !isPlatformServer(this.platformId) &&
      this.transferState.hasKey(POLITICIAN_STATE_KEY)
    ) {

      console.warn('Using transferred state');
      const data = this.transferState.get(POLITICIAN_STATE_KEY, null);
      this.transferState.remove(POLITICIAN_STATE_KEY);
      return of(data);
    }

    console.warn('Querying API');

    // Otherwise fetch from API
    return this.httpclient.get(this.URL.concat('/politicians')).pipe(
      tap(data => {
        // Store only during SSR
        if (isPlatformServer(this.platformId)) {
          console.warn('storing transfer state');
          this.transferState.set(POLITICIAN_STATE_KEY, data);
        }
      })
    );
  }
}
