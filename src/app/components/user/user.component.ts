import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _isConnected: boolean = false;
  isRegistration!: boolean;
  isConnection!: boolean;

  constructor(private userService: UserService, route: ActivatedRoute, router: Router) {
    this._isConnected = this.userService.connected;
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

  onClickDisconnection(){
    this.userService.disconnection();
    alert("You're disconnected");
  }
}
