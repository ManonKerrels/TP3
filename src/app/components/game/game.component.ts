import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/app/model/developer.model';
import { Game } from 'src/app/model/game.model';
import { DeveloperService } from 'src/app/services/developer.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games!: Game[];
  developers!: Developer[];

  constructor(private gameService: GameService, private router: Router) {
    this.getGames();
   }

  ngOnInit(): void {
  }

  getGames(){
    this.gameService.getGames()
      .subscribe({
        next: games => this.games = games,
        error: err => alert("echec"),
        complete: () => console.log("get games - completed")
    })
  }

}
