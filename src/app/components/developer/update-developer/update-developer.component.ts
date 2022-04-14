import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DEVELOPER_INSERT_FORM } from 'src/app/forms/game.form';
import { Developer } from 'src/app/model/developer.model';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'app-update-developer',
  templateUrl: './update-developer.component.html',
  styleUrls: ['./update-developer.component.css']
})
export class UpdateDeveloperComponent implements OnInit {

  developer!: Developer;
  id!: number;

  form = new FormGroup({
    'name': new FormControl(undefined),
    'parentCompany': new FormControl(undefined),
    'creationDate': new FormControl(undefined)
  })

  constructor(private developerService: DeveloperService, private builder: FormBuilder, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.builder.group(DEVELOPER_INSERT_FORM);
    this.onSubmit();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.developerService.updateDeveloper(this.form.value, this.id)
      .subscribe({
        next: developer => this.developer = developer,
        error: err => console.log("echec"),
        complete: () => console.log("update editor - completed")
      })
    } else{
      console.log("error");
    }
  }

}
