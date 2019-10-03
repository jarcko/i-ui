import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedItem } from 'src/app/core/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import * as apiConfig from '../../apiConfig.json';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly endpoints;
  private errorSync$ = new BehaviorSubject<Error>(null);

  constructor(private httpClient: HttpClient) {
    this.endpoints = (apiConfig as any).default.endpoints;
  }

  fetchFeedItems(idx: string, qty: string): Observable<FeedItem[]> {
    const { baseUrl, port, path } = this.endpoints;
    return this.httpClient.get<FeedItem[]>(`${baseUrl}:${port}${path}`, { params: { idx, qty } });
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
