import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService) {
    this.user = this.userService.isUser;
  }

  ngOnInit(): void {
  }

  onClickDisconnection(){
    this.userService.disconnection();
    alert("You're disconnected");
  }

}
