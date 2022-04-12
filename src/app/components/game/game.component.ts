import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/model/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games!: Game[];

  constructor(private gameService: GameService, private router: Router) {
    this.getGames();
   }

  ngOnInit(): void {
  }

  getGames(){
    this.gameService.getGames()
      .subscribe({
        next: game => this.games = game,
        error: err => alert("echec"),
        complete: () => console.log("get games - completed")
    })
  }

}
