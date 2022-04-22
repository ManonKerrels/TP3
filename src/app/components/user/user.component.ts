import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;

  isRegistration!: boolean;
  isConnection!: boolean;

  constructor(private userService: UserService, route: ActivatedRoute, router: Router) {
    userService.$connected.subscribe(() => this.isConnected);
   }

  ngOnInit(): void {
  }

  onClickRegister(){
    this.isRegistration = true;
    this.isConnection = false;
  }

  onClickConnection(){
    this.isConnection = true;
    this.isRegistration = false;
  }

  isConnected(){
    return this.userService.isConnected;
  }
}
