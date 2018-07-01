import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

  // initialize variables
  countries;
  number = "^[0-9]{1,2}";
  numbers = "^[0-9]{11}";
  selectedValue = null;
  badcall = false;


  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit() {
    console.log(this.dataService.sharedData);
  }

  onChange2(val) {
    console.log(val);
  }

  reg(
    name: HTMLInputElement,
    phone: HTMLInputElement,
    country: HTMLInputElement,
    jersey: HTMLInputElement,
    email: HTMLInputElement
  ): boolean {

    // validate user's input
    if (name.value.length <= 0) {
      console.log("bad name");
      this.badcall = true ; 

      return false;
    } else if (phone.value.length <= 10) {
      console.log("bad phone");
      this.badcall = true ; 

      return false;
    } else if (country.value.length <= 0) {
      console.log("bad country");
      this.badcall = true ; 

      return false;
    } else if (jersey.value.length <= 0) {
      console.log("check jersey number");
      this.badcall = true ; 

      return false;
    }  else if (email.value.length <= 0) {
      console.log("check email");
      this.badcall = true ; 

      return false;
    }
     else {
      this.badcall = false;
      this.dataService.country = country.value;
      this.dataService.jersey_number = jersey.value;
      this.dataService.phone = phone.value;
      this.dataService.username = name.value;
      this.dataService.email = email.value;

      this.router.navigateByUrl("/quiz");

      return true;
    }
  }
}
