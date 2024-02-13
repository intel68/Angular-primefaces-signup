import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private Router: Router){

  }

  logOut() {
    sessionStorage.clear();
    this.Router.navigate(['login']);
  }
// upload(event:any){

// }
}
