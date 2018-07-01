import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { QuizzService } from "../services/quizz.service";
import "rxjs/add/operator/map";
import { Response} from "@angular/http";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-quizz",
  templateUrl: "./quizz.component.html",
  styleUrls: ["./quizz.component.css"]
})
export class QuizzComponent implements OnInit {

  //initialize variables 
  questions: any[];
  answers: any[];
  questionNumber = 0;
  scores = 0;
  pols;
  countrySelected;
  finish = false ;



  constructor(
    private http: Http,
    private router: Router,
    public quizzService: QuizzService,
    public dataservice: DataService
  ) {}

  ngOnInit() {

    // if user directly accesses this page, redirect to home
    console.log(this.dataservice.country);
    if (this.dataservice.country === undefined ){
    this.router.navigateByUrl("/register"); 
     }
    else{
      this.countrySelected = this.dataservice.country;
      this.quizzService.getQuestions();
      this.getQuestion();

    } 
   
  }


  // get questions from API
  getQuestion() {
    console.log(this.dataservice.country, this.dataservice.username, this.dataservice.jersey_number, this.dataservice.phone, this.dataservice.email)
    this.http
      .get(
        // this.quizzService.getQuestions() + "question/brazil"
        this.quizzService.getQuestions() + "question/" + this.countrySelected
      )
      .map((response: Response) => response.json())
      .subscribe(data => {
        console.log(data);

        this.questions = data;

        this.startTimer();
        // console.log(this.questions);
      });
  }
  
  // end quiz if questions  answered equals 10
  Answer(choice) {
    if (this.questions[this.questionNumber].ANS === choice) {
      this.scores = this.scores + 10;
    }
    this.questionNumber++;
    if (this.questionNumber === 10) {


      // post user details to API at the end of quiz
      let body = {
       username: this.dataservice.username,
        phone:  this.dataservice.phone,
        country: this.dataservice.country,
        jersey_number: this.dataservice.jersey_number,
        score: this.scores,
        email: this.dataservice.email
  
      }
      console.log(body);

      this.http
      .post(
        // this.quizzService.getQuestions() + "question/brazil"
        this.quizzService.getQuestions()+"player/submit", body
      )
      .map((response: Response) => response.json())
      .subscribe(res => {
        console.log(res);

        

      });


      this.finish = true ;
      console.log("Quiz Ended");
      this.quizzService.postScores(this.scores);
      this.router.navigateByUrl("/leaderboard");
      return this.scores;
    }
  }


  // timer function
  startTimer() {

     this.quizzService.timer = setInterval(() => {
     this.quizzService.seconds--;

      if ( this.finish === true){
        this.quizzService.seconds === 0;

        console.log("nothing");

        clearInterval(this.quizzService.timer);


      }else {

        if (this.quizzService.seconds === 0) {
          alert("You ran out of time");
          this.quizzService.postScores(this.scores);
          this.router.navigateByUrl("/leaderboard");
          return this.scores;
        }
      }
    }, 1000);

    return this.quizzService.seconds;
  }
}
