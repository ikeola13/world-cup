import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { RuleComponent } from './rule/rule.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizzComponent } from './quizz/quizz.component';
import { LandingPage2Component } from './landing-page2/landing-page2.component';
import { ViewleaderComponent } from './viewleader/viewleader.component';

export const appRoutes : Routes=[
    {path:'', component: LandingPageComponent},
    {path:'home', component: LandingPageComponent},
    {path:'tale', component: LandingPage2Component},
    {path:'register', component: RegisterComponent},
    {path:'quiz', component: QuizzComponent},
    {path:'history', component: HistoryComponent},
    {path:'rule', component: RuleComponent},
    {path:'howto', component: HowToPlayComponent},
    {path:'leaderboard', component: LeaderboardComponent},
    {path:'view', component: ViewleaderComponent},
    
];