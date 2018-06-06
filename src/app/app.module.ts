
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { RuleComponent } from './rule/rule.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizzComponent } from './quizz/quizz.component';
import { HttpModule} from '@angular/http';
import { ResultComponent } from './result/result.component';
import { QuizzService } from './services/quizz.service';
import { LandingPage2Component } from './landing-page2/landing-page2.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LandingPageComponent,
    HistoryComponent,
    RuleComponent,
    HowToPlayComponent,
    LeaderboardComponent,
    QuizzComponent,
    ResultComponent,
    LandingPage2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
   
  ],
  providers: [QuizzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
