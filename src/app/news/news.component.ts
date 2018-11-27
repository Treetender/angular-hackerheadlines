import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsStory } from '../news-story';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  stories: NewsStory[] = [];
  error: string;

  constructor(private service: NewsService) { }

  ngOnInit() {
    this.getStories();
  }

  refreshStories() {
    this.getStories();
  }

  private getStories() {
    this.service.getTopStoryIds().pipe().subscribe(
      (response) => {
        const ids = response;
        this.service.getTopStories(ids).pipe().subscribe(
          (story) => {
            console.log(story);
            this.stories.push(story);
          }
        );
      },
      (error) => { console.log('Failed to Fetch stories: ' + error); },
    );
  }

}
