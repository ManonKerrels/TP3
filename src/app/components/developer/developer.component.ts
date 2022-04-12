import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/model/developer.model';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developers!: Developer[];

  constructor(private developerService: DeveloperService) {
    this.getDevelopers();
   }

  ngOnInit(): void {
  }

  getDevelopers(){
    this.developerService.getDevelopers()
      .subscribe({
        next: developers => this.developers = developers,
        error: err => alert("echec"),
        complete: () => console.log("get developers - completed")
      })
  }

}
