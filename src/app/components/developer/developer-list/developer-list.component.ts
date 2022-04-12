import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/app/model/developer.model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  @Input()
  developer!: Developer;

  developerDetails: boolean = false;
  buttonText!: String;

  constructor() { }

  ngOnInit(): void {
  }

  onDetail(){
    if(this.buttonText === "Check details"){
      this.developerDetails = true;
      this.buttonText = "Unckeck details";
    } else {
      this.developerDetails = false;
      this.buttonText = "Check details";
    }
  }

}
