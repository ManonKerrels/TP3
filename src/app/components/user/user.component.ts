import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isRegistration!: boolean;
  isConnection!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick1(){
    this.isRegistration = true;
    this.isConnection = false;
  }

  onClick2(){
    this.isConnection = true;
    this.isRegistration = false;
  }
}
