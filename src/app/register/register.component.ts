import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries;
  number="^[0-9]{1,2}";
  numbers="^[0-9]{11}";
  selectedValue=null;
  
  constructor() { }

  ngOnInit() {
    this.countries =[
      {name:"Argentina", value: "Argentina"},
      {name:"Australia", value: "Australia"},
      {name:"Belgium", value: "Belgium"},
      {name:"Brazil", value: "Brazil"},
      {name:"Colombia", value: "Colombia"},
      {name:"Costa Rica", value: "Costa-Rica"},
      {name:"Croatia", value: "Croatia"},
      {name:"Denmark", value: "Denmark"},
      {name:"Egypt ", value: "Egypt"},
      {name:"England ", value: "England"},
      {name:"France", value: "France"},
      {name:"Germany", value: "Germany"},
      {name:"Iceland", value: "Iceland"},
      {name:"Iran", value: "Iran"},
      {name:"Japan", value: "Japan"},
      {name:"Mexico", value: "Mexico"},
      {name:"Morocco", value: "Morocco"},
      {name:"Nigeria", value: "Nigeria"},
      {name:"Panama ", value: "Panama"},
      {name:"Peru", value: "Peru"},
      {name:"Poland", value: "Poland"},
      {name:"Portugal", value: "Portugal"},
      {name:"Russia", value: "Russia"},
      {name:"Saudi Arabia", value: "Saudi-Arabia"},
      {name:"Senegal", value: "Senegal"},
      {name:"Serbia", value: "Serbia"},
      {name:"South Korea", value: "South-Korea"},
      {name:"Spain", value: "Spain"},
      {name:"Sweden", value: "Sweden"},
      {name:"Switzerland", value: "Switzerland"},
      {name:"Tunisia", value: "Tunisia"},
      {name:"Uruguay", value: "Uruguay"}
    ]

  }

 

}
