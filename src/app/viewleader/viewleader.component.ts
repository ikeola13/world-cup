import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../services/quizz.service';
import "rxjs/add/operator/map";
import { Response} from "@angular/http";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-viewleader',
  templateUrl: './viewleader.component.html',
  styleUrls: ['./viewleader.component.css']
})
export class ViewleaderComponent implements OnInit {

  // initialize variables
  leaders: any[];

  constructor(
    private quizzService:QuizzService,
    private http: Http,
    private router: Router,
    public dataservice: DataService
  ) { }

  ngOnInit() {
    this.getLeaders();
  }

  getLeaders(){
    
    this.http
    .get(
      this.quizzService.getQuestions()+"leaderboard"
    )
    .map((response: Response) => response.json())
    .subscribe(data => {

      console.log(data);

      this.leaders = data ;
      });

  
   }

}
