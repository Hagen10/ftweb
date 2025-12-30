import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  httpclient = inject(HttpClient);

  getData(): Observable<any> {
    return this.httpclient.get('http://localhost:8080/api/politicians');
  }
}
