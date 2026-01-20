import { HttpClient } from '@angular/common/http';
import { inject, Injectable, makeStateKey, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export const POLITICIAN_STATE_KEY = makeStateKey<any>('politicians');

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private httpclient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  private getBaseUrl(): string {
    // For server-side rendering, we need to use the environment apiUrl
    if (isPlatformServer(this.platformId)) {
      return environment.apiUrl;
    }
    
    // Client-side: use localhost
    return 'http://localhost:8080/api';
  }

  getPoliticianInfo(id: number): Observable<any> {
    console.log('fetching politician info with: ', this.getBaseUrl());

    return this.httpclient.get(this.getBaseUrl().concat('/politicianInfo/', id.toString()));
  }

  getPoliticianVotes(id: number): Observable<any> {
    console.log('fetching politician votes with: ', this.getBaseUrl());

    return this.httpclient.get(this.getBaseUrl().concat('/politicianVotes/', id.toString()));
  }

  getData(): Observable<any> {
    console.log('fetching ALL politicians with: ', this.getBaseUrl());

    return this.httpclient.get(this.getBaseUrl().concat('/politicians'));
  }
}
