import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { QuizzService } from "../services/quizz.service";

import "rxjs/add/operator/map";
import { Headers, Response, RequestOptions } from "@angular/http";
import { HttpModule } from "@angular/http";

@Component({
  selector: "app-quizz",
  templateUrl: "./quizz.component.html",
  styleUrls: ["./quizz.component.css"]
})
export class QuizzComponent implements OnInit {
  questions: any[];
  answers: any[];
  questionNumber = 0;
  scores = 0;
  pols;


  constructor(
    private http: Http,
    private router: Router,
    private quizzService: QuizzService
  ) {}

  ngOnInit() {
    this.quizzService.getQuestions();

    this.http
      .get(this.quizzService.getQuestions() + "questions")
      .map((response: Response) => response.json())
      .subscribe(data => {
        // console.log(data.data);
        
       
       

          this.questions = data.data;

                // this.startTimer();
                console.log(this.questions);

                
      });
  }


  

  Answer(choice) {
    if (this.questions[this.questionNumber].ANS === choice) {
      this.scores++;
    }
    this.questionNumber++;
    if (this.questionNumber === 10) {
      console.log("Quiz Ended");
      this.quizzService.postScores(this.scores);
      this.router.navigateByUrl("/leaderboard");
      return this.scores;
    }
  }
  startTimer() {
    this.quizzService.timer = setInterval(() => {
      this.quizzService.seconds--;
      if (this.quizzService.seconds === 0) {
        alert("You ran out of time");
        this.quizzService.postScores(this.scores);
        this.router.navigateByUrl("/leaderboard");
        return this.scores;
      }
    }, 1000);

    return this.quizzService.seconds;
  }
l: any[];
  test() {
    this.http
      .get("http://45.32.231.89/api/v1/questions")
      .map((response: Response) => response.json())
      .subscribe(
        res => {
          // console.log(res);
          for (var a in res.data){
            this.l = res.data[a];
            console.log(this.l);
          }
       
        },
        err => {
          // let error = JSON.parse(err.text());
          console.log(err);

          return false;
        }
      );
  }
}
