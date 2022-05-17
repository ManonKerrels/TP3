import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/app/model/developer.model';
import { Game } from 'src/app/model/game.model';
import { User } from 'src/app/model/user.model';
import { DeveloperService } from 'src/app/services/developer.service';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  user!: User;

  @Input()
  games!: Game[]

  game!: Game;

  @Input()
  developer!: Developer;
  developers!: Developer[];

  developerDetails: boolean = false;
  buttonText!: String;

  constructor(private developerService: DeveloperService, private gameService: GameService, private userService: UserService) {
    this.user = userService.isUser;

    this.userService.refreshSubject.subscribe({
      next: () => {
        this.developerService.getDevelopers().subscribe({
        next: developers => this.developers = developers,
        error: err => console.log("echec"),
        complete: () => console.log("get developers - completed")
      });
      }
    })
   };

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
    alert("Developer has been deleted");
  }

  isConnected(){
    return this.userService.isConnected;
  }

}
