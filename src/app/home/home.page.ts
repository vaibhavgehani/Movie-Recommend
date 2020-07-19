import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { DataService } from '../services/data/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  MovieName = '';
  url = environment.modelUrl;
  public recommentList: any = [];
  constructor(private http: HttpClient, private dataService: DataService) {}
  getRecommend() {
    if (this.MovieName !== '') {
      this.http.get(`${this.url}/${this.dataService.selectedType}?name=${this.MovieName}`).subscribe((response) => {
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
