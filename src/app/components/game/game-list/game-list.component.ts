import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developer } from 'src/app/model/developer.model';
import { Game } from 'src/app/model/game.model';
import { DeveloperService } from 'src/app/services/developer.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Input()
  game!: Game;
  games!: Game[];

  @Input()
  developer!: Developer;
  developers!: Developer[];

  id!: number;

  gameDetails: boolean = false;
  buttonText!: String;

  constructor(private gameService: GameService, private developerService: DeveloperService) {
    this.gameService.getGames().subscribe({
      next: games => this.games = games,
      error: err => console.log("echec"),
      complete: () => console.log("get games - completed")
    });
  }

  ngOnInit(): void {
  }

  onDetail(){
    if(this.buttonText === "Check details"){
      this.gameDetails = true;
      this.buttonText = "Unckeck details";
    } else {
      this.gameDetails = false;
      this.buttonText = "Check details";
    }
  }

  deleteGame(){
    this.gameService.deleteGame(this.game.id)
    .subscribe({
      next: game => this.game = game,
      error: err => console.log("echec"),
      complete: () => alert("delete game - completed")
    });
  }


}
