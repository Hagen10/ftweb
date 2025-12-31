import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export const POLITICIAN_STATE_KEY = makeStateKey<any>('politicians');

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private readonly URL = 'http://localhost:8080/api/politicians';
  private httpclient = inject(HttpClient);
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);

  getData(): Observable<any> {
    // If running in the browser and state exists → use it
    if (
      !isPlatformServer(this.platformId) &&
      this.transferState.hasKey(POLITICIAN_STATE_KEY)
    ) {
      const data = this.transferState.get(POLITICIAN_STATE_KEY, null);
      this.transferState.remove(POLITICIAN_STATE_KEY);
      return of(data);
    }

    // Otherwise fetch from API
    return this.httpclient.get(this.URL).pipe(
      tap(data => {
        // 3️⃣ Store only during SSR
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(POLITICIAN_STATE_KEY, data);
        }
      })
    );
  }
}
