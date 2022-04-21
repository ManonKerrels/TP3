import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/app/model/developer.model';
import { Game } from 'src/app/model/game.model';
import { DeveloperService } from 'src/app/services/developer.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  @Input()
  games!: Game[]

  game!: Game;

  @Input()
  developer!: Developer;

  developerDetails: boolean = false;
  buttonText!: String;

  constructor(private developerService: DeveloperService, private gameService: GameService) { };

  ngOnInit(): void {
  }

  onDetail(){
    console.log(this.developer.game);
    if(this.buttonText === "Check details"){
      this.developerDetails = true;
      this.buttonText = "Unckeck details";
    } else {
      this.developerDetails = false;
      this.buttonText = "Check details";
    }
  }

  deleteDeveloper(){
    this.developerService.deleteDeveloper(this.developer.id)
    .subscribe({
      next: developer => this.developer = developer,
      error: err => console.log("echec"),
      complete: () => console.log("delete developer - completed")
    });
  }

}
