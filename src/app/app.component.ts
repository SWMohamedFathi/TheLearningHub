import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'TheLearningHub';
Name = "Mohamed";
email = "mohamed@gmail.com";
salary = "500";
clear() {
  this.Name = '';
  this.email = '';

}

HandleInputChange(event:any)
{
  console.log(event);

  if(event.length>10)
  {
    alert("Stop Writing!!");
  }
}
courses :any=[{
  id:1,
  coursename:"Angular",
  price:20,
},
{
  id:2,
  coursename:"c#",
  price:10,
},
{
  id:3,
  coursename:"oop",
  price:15,
},
]
isUpdated:boolean=false;
courses2:string[]=["Angular","oop","sql"];
ToogleFun()
{
  this.isUpdated = ! this.isUpdated
}
}
