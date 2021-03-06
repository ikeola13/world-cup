import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../services/quizz.service';
import "rxjs/add/operator/map";
import { Response} from "@angular/http";
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { DataService } from "../services/data.service";



@Component({
  moduleId: module.id.toString(),
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
  showmessagel; 
  username;
  jersey;
  public repoUrl = 'https://becomealegend90.com';
  public imageUrl = '../../assets/img/jersey.png';
  public messager;
  tryagain = false;
  finalrank;
  above;





  

  constructor(
    private quizzService:QuizzService,
    private http: Http,
    private router: Router,
    public dataservice: DataService
  ) { }

  ngOnInit() {
    console.log(this.dataservice.country, this.dataservice.username, this.dataservice.jersey_number, this.dataservice.phone, this.dataservice.email)

    // get and assign username and jersey from DataService service.
    this.username = this.dataservice.username ;
    this.jersey = this.dataservice.jersey_number ;


    //if user accesses page directly, redirect to home
    console.log(this.quizzService.result);
      if (this.quizzService.result === undefined){
        this.router.navigateByUrl("/");


      }else{

        this.result=this.quizzService.result;
        this.getLeaders();
        this.who();
        this.rank();

      }

    // this.result=this.quizzService.result;
    // this.getLeaders();

    // this.who();

   
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


   //getrank
   rank(){
    setTimeout(()=>{ 
      this.http
      .get(
        this.quizzService.getQuestions()+"myrank/"+ this.dataservice.username
      )
      .map((response: Response) => response.json())
      .subscribe(data => {
  
        console.log(data);

      this.finalrank = data ;
  
        });
  
    }, 1000)

   }
  
   //legendary according to user score
   who(){

     if (this.result == 100 ){
       this.showmessage = "Yaay! you're the best" ;
       this.showmessage2 = "You are legendary PELE!!!" ;
       this.showmessagel = "(3 TIME WORLD CUP WINNER)";
       this.messager = "Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"
     }
     else if (this.result >= 90 && this.result < 100 ){
      this.showmessage = "Excellent!!" ;
      this.showmessage2 = "You are legendary MARADONA!!!" ;
      this.showmessagel = "(1 TIME WORLD CUP WINNER)";
      this.messager = "Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else if (this.result >= 80 && this.result < 90){
      
      this.showmessage = "Great! " ;
      this.showmessage2 = "You are legendary OKOCHA!!!" ;
      this.showmessagel = "(1 TIME AFRICA CUP OF NATIONS WINNER)";
      this.messager = "Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else if (this.result >= 70 && this.result < 80){
      this.showmessage = "you did well! " ;
      this.showmessage2 = "You are legendary KANU!!!" ;
      this.showmessagel = "(2 TIME AFRICAN FOOTBALLER OF THE YEAR)";
      this.messager = "Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
     else {
      this.showmessage = "awww, you can do better" ;
      this.showmessage2 = "SORRY, You are not a legend !" ;
      this.above = "Score atleast 70% to become a Legend !"
      this.tryagain = true;
      this.messager = "Become a legend in 90seconds and stand a chance of winning N50,000 worth of airtime!"

     }
   }


}
