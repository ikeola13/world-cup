import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {



  constructor() { }

  // initialize variables
  sharedData = "test";
  username;
  phone;
  country;
  jersey_number;
  score;


}