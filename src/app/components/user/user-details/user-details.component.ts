import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game.model';
import { User } from 'src/app/model/user.model';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  game!: Game;
  games!: Game[];

  @Input()
  user!: User;

  constructor(private userService: UserService, private gameService: GameService) {

    this.user = userService.isUser;

    this.gameService.refreshSubject.subscribe({
      next: () => {
        this.gameService.getGames().subscribe({
          next: games => this.games = games,
          error: err => console.log("echec"),
          complete: () => console.log("get games - completed")
        })
      }
    })

  }

  ngOnInit(): void {}

  onClickDisconnection(){
    this.userService.disconnection();
    alert("You're disconnected");
  }

  isConnected(){
    return this.userService.isConnected;
  }

  deleteFromList(user: User, game: Game){
    user = this.user;

    if(this.isConnected()){
      this.userService.deleteGameFromFavorites(user.id, game.id)
      .subscribe({
        next: user => this.user = user,
        error: err => console.log("echec"),
        complete: () => console.log("update favorites - completed")
      });
      alert("This game has been deleted from your list");
    }
  }

}
