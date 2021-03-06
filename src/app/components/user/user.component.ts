import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user?: User;

  isRegistration!: boolean;
  isConnection!: boolean;

  constructor(private userService: UserService, route: ActivatedRoute, router: Router) {
    this.user = userService.isUser;
    userService.userObs.subscribe({
      next: user => this.user = user,
    });
   }

  ngOnInit(): void {
  }

  onSendUser(user: User){
    this.userService.refreshSubject.subscribe({
      next: user => this.user = user
    })
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
