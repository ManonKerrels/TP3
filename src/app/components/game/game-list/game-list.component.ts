import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/model/game.model';
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

  gameDetails: boolean = false;
  buttonText!: String;

  constructor(private gameService: GameService) {
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
      complete: () => console.log("delete game - completed")
    });
  }


}
