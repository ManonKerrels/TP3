import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USER_INSERT_FORM } from 'src/app/forms/game.form';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user!: User;

  form !: FormGroup;

  constructor(private builder: FormBuilder, private userService: UserService) { 
    this.form = builder.group(USER_INSERT_FORM);
    this.onSubmit();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.userService.addUser(this.form.value)
      .subscribe({
        next: user => this.user = user,
        error: err => console.log("echec"),
        complete: () => console.log("add user - completed")
      })
      alert("Congrats ! Your accont has been created.")
    } else{
      console.log("error");
    }
  }

}
