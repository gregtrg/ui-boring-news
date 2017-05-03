import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {News} from '../dto/news.dto';
import {NewsService} from '../services/news.service'

@Component({
  selector: 'news-detail',
  templateUrl: './html/news-detail.component.html',
})
export class NewsDetailComponent implements OnInit {
  news: News;

  constructor(
    private newsService : NewsService,
    private route: ActivatedRoute) { }
  
ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.newsService.getConcretNews(+params['id']))
      .subscribe(news => this.news = news);
  }
}