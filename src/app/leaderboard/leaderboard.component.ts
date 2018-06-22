import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../services/quizz.service';
import "rxjs/add/operator/map";
import { Response} from "@angular/http";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { DataService } from "../services/data.service";



@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  // initialize variables
  leaders: any[];
  result;
  showmessage;
  showmessage2;
  showmessage3; 
  username;
  jersey;
  public repoUrl = 'https://becomealegend90.com';
  public imageUrl = '../../assets/img/jersey.png';
  public messager;



  

  constructor(
    private quizzService:QuizzService,
    private http: Http,
    private router: Router,
    public dataservice: DataService
  ) { }

  ngOnInit() {
    console.log(this.dataservice.country, this.dataservice.username, this.dataservice.jersey_number, this.dataservice.phone)

    // get and assign username and jersey from DataService service.
    this.username = this.dataservice.username ;
    this.jersey = this.dataservice.jersey_number ;


    //if user accesses page directly, redirect to home
    console.log(this.quizzService.result);
      // if (this.quizzService.result === undefined){
      //   this.router.navigateByUrl("/register");


      // }else{

      //   this.result=this.quizzService.result;
      //   this.getLeaders();
      //   this.who();

      // }

    this.result=this.quizzService.result;
    this.getLeaders();

    this.who();

   
  }


  // get leaderboard data from API
   getLeaders(){
    setTimeout(()=>{ 
    this.http
    .get(
      this.quizzService.getQuestions()+"leaderboard"
    )
    .map((response: Response) => response.json())
    .subscribe(data => {

      console.log(data);

      this.leaders = data ;
      });

  }, 1000)
   }

  
   //legendary according to user score
   who(){

     if (this.result == 100 ){
       this.showmessage = "Yaay! you're the best" ;
       this.showmessage2 = "You are legendary MESSI!!!" ;
       this.messager = "I AM THE LEGENDARY MESSI!!!, Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"
     }
     else if (this.result >= 90 && this.result < 100 ){
      this.showmessage = "Excellent!!" ;
      this.showmessage2 = "You are legendary PELE!!!" ;
      this.messager = "I AM THE LEGENDARY PELE!!!, Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else if (this.result >= 80 && this.result < 90){
      this.showmessage = "you did well! " ;
      this.showmessage2 = "You are legendary OKOCHA!!!" ;
      this.messager = "I AM THE LEGENDARY OKOCHA!!!, Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else if (this.result >= 60 && this.result < 80){
      this.showmessage = "you did well! " ;
      this.showmessage2 = "You are legendary XAVI!!!" ;
      this.messager = "I AM THE LEGENDARY XAVI!!!, Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else if (this.result >= 40 && this.result < 60){
      this.showmessage = "you tried!" ;
      this.showmessage2 = "You are legendary JOHN TERRY!!!" ;
      this.messager = "I AM THE LEGENDARY JOHN TERRY!!!, Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else {
      this.showmessage = "awww, you can do better" ;
      this.showmessage2 = "SORRY, You are not a legend !" ;
      this.messager = "I AM THE LEGENDARY JOHN TERRY !!!, Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
   }

}
