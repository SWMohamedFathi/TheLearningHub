import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message :string =" this is from hime service!!";
  constructor() { }
}
