import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallService {
  http = inject(HttpClient);

  getFact() {
    return this.http.get('https://catfact.ninja/fact').pipe(delay(5000));
  }
}
