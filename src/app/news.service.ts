import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsStory } from './news-story';
import { switchMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private static readonly URL = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) { }

  getTopStoryIds(): Observable<number[]> {
    return this.http.get<number[]>(NewsService.URL + 'topstories.json');
  }

  getStoryDetails(storyId: number): Observable<NewsStory> {
    return this.http.get<NewsStory>(NewsService.URL + 'item/' + storyId + '.json');
  }

  getTopStories(ids: number[]): Observable<NewsStory> {
    return from(ids).pipe(
      mergeMap((id => this.getStoryDetails(id)))
    );
  }
}
