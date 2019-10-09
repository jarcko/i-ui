import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedItem } from 'src/app/core/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private errorSync$ = new BehaviorSubject<Error>(null);

  constructor(private httpClient: HttpClient) { }

  fetchFeedItems(idx: string, qty: string): Observable<FeedItem[]> {
    const { apiServer, path, port } = environment;
    return this.httpClient.get<FeedItem[]>(`${apiServer}:${port}${path}`, { params: { idx, qty } });
  }

  handleError(err: Error): void {
    this.errorSync$.next(err);
  }

  clearError(): void {
    this.errorSync$.next(null);
  }

  get error$(): Observable<Error> {
    return this.errorSync$.asObservable();
  }
}
