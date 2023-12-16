import { Component } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css']
})
export class LoginComponent {
  constructor(public home:HomeService){}

}
