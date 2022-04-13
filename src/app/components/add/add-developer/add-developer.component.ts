import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DEVELOPER_INSERT_FORM } from 'src/app/forms/game.form';
import { Developer } from 'src/app/model/developer.model';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {

  developer!: Developer;

  form = new FormGroup({
    'name': new FormControl,
    'company': new FormControl,
    'date': new FormControl
  })

  constructor(private developerService: DeveloperService, private builder: FormBuilder) {
    this.builder.group(DEVELOPER_INSERT_FORM);
    this.addDeveloper();
   }

  ngOnInit(): void {
  }

  addDeveloper(){
    if(this.form.valid){
      this.developerService.addDeveloper(this.developer)
      .subscribe({
        next: developer => this.developer = developer,
        error: err => console.log("echec"),
        complete: () => console.log("add editor - completed")
      })
    } else{
      console.log("error");
    }
  }

}
