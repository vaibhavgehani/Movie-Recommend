import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  MovieName = '';
  url = environment.modelUrl;
  public recommentList: any = [{title: "Gordy"},{title: "The Black Cauldron"},{title: "A Close Shave"},{title: "City Slickers II: The Legend of Curly's Gold"},{title: "The Newton Boys"}]
  constructor(private http: HttpClient) {}
  getRecommend() {
    if (this.MovieName !== '') {
      this.http.get(`${this.url}?name=${this.MovieName}`).subscribe((response) => {
        console.log(response);
        this.recommentList = response;
        this.recommentList.forEach(element => {
          element.poster_path = 'http://image.tmdb.org/t/p/w92' + element.poster_path;
        });
      });
    }
  }
  clearField() {
    this.MovieName = '';
    this.recommentList = [];
  }
}
