import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USER_CONNEXION_FORM } from 'src/app/forms/game.form';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  @Output('user')
  userEmitter = new EventEmitter<User>();

  user?: User;

  connexionForm !: FormGroup;

  constructor(private builder: FormBuilder, private userService: UserService) {
    this.connexionForm = builder.group(USER_CONNEXION_FORM);
    userService.userObs.subscribe({
      next: user => this.user = user,
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    this.user = this.userService.connection(this.connexionForm.value);
    this.userEmitter.emit(this.user);
  }

}
