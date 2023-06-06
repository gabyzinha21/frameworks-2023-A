import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router) {}

  isError = false;
  isCorrect = false;

 

  user = "gaby"
  pwd = "gaby"


  login(){
    this.isError = true;

    if(this.user == "gaby" && this.pwd == "gaby"){
      this.isCorrect = true;
      this.isError = false;
      this.router.navigate (['/dashboard']);
    } else {
      this.isError = true;
      this.isCorrect = false;
    }

    // user == "beto@beto.com" pwd="beto"

    // console.log("User = " + this.user + " Password = " + this.pwd)

  }

}
