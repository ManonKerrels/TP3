import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval } from 'rxjs';
import { USER_CONNEXION_FORM } from 'src/app/forms/game.form';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  user!: User;

  connexionForm !: FormGroup;

  constructor(private builder: FormBuilder, private userService: UserService) {
    this.connexionForm = builder.group(USER_CONNEXION_FORM);
  }

  ngOnInit(): void {}

  onSubmit(){
    this.userService.connection(this.connexionForm.value);
    
  }

}
