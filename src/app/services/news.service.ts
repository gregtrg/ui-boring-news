import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {News} from '../dto/news.dto';

@Injectable()
export class NewsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private newsUrl = 'http://localhost:8881/news';  // URL to web api

  constructor(private http: Http) { }

    getNews(): Promise<News[]> {
    return this.http.get(this.newsUrl)
                .toPromise()
                .then(response => response.json() as News[])
                .catch(this.handleError);
    }
    getConcretNews(id : number) : Promise<News> {
      const url = `${this.newsUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => {
          console.log(response.json());
          return response.json() as News})
        .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}