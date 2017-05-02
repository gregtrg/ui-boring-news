import { Component, OnInit } from '@angular/core';

import {News} from '../dto/news.dto';
import {NewsService} from '../services/news.service'

@Component({
  selector: 'news',
  templateUrl: './html/news.component.html',
})
export class NewsComponent implements OnInit {
  title = 'News';
  news : News[];
  selectedNews: News;

  constructor(
    private newsService : NewsService) { }
  
  getNews() : void {
        this.newsService
        .getNews()
        .then(news => this.news = news);
      
  }
  ngOnInit(): void {
    this.getNews();
  }
}
