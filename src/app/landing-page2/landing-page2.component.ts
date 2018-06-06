import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page2',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.css']
})
export class LandingPage2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
