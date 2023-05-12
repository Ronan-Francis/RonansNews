import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_KEY = "f1f9882934664296b624c1a07083bafd"
  constructor(private http: HttpClient) { }

  GetTopHeadlines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.API_KEY);
  }
  GetSearch(query: string): Observable<any> {
    return this.http.get('https://newsapi.org/v2/everything?q='+query+'&sortBy=popularity&apiKey='+this.API_KEY);
  }
}
