import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { DataService } from '../services/data/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  public menuList = environment.menuList;
  constructor(private dataService:DataService,private route: Router) { }
  gotoPage(value) {
    this.dataService.selectedType = value;
    this.route.navigate(['home']);
  }
  ngOnInit() {
  }

}
