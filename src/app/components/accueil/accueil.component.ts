import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  games!: Game[];

  constructor(private gameService: GameService) {
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
