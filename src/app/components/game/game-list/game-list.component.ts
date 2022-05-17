import { Component, Input, OnInit } from '@angular/core';
import { Developer } from 'src/app/model/developer.model';
import { Editor } from 'src/app/model/editor.model';
import { Game } from 'src/app/model/game.model';
import { User } from 'src/app/model/user.model';
import { DeveloperService } from 'src/app/services/developer.service';
import { EditorService } from 'src/app/services/editor.service';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  user!: User;

  @Input()
  game!: Game;
  games!: Game[];

  @Input()
  developer!: Developer;
  developers!: Developer[];

  @Input()
  editor!: Editor;
  editors!: Editor[];

  gameDetails: boolean = false;
  buttonText!: String;

  updateDevBool: boolean = false;
  updateEditBool: boolean = false;

  constructor(private gameService: GameService, private developerService: DeveloperService, private editorService: EditorService, private userService: UserService) {
    // userService.$connected.subscribe(() => {
    //   this.isConnected;
    // });
    
    this.user = userService.isUser;

    this.gameService.refreshSubject.subscribe({
      next: () => {
        this.gameService.getGames().subscribe({
        next: games => this.games = games,
        error: err => console.log("echec"),
        complete: () => console.log("get games - completed")
      });
      }
    })
    
    this.developerService.refreshSubject.subscribe({
      next: () => {
        this.developerService.getDevelopers().subscribe({
        next: developers => {
          this.developers = developers;
          console.log(developers)
        },
        error: err => console.log("echec"),
        complete: () => console.log("get developers - completed")
      });
      }
    })
    
    this.editorService.refreshSubject.subscribe({
      next: () => {
        this.editorService.getEditors().subscribe({
        next: editors => this.editors = editors,
        error: err => console.log("echec"),
        complete: () => console.log("get editors - completed")
      });
      }
    })
    
  }

  ngOnInit(): void { }

  onDetail(){
    if(this.buttonText === "Check details"){
      this.gameDetails = true;
      this.buttonText = "Unckeck details";
      console.log(this.game);
    } else {
      this.gameDetails = false;
      this.buttonText = "Check details";
    }
  }

  deleteGame(){
    this.gameService.deleteGame(this.game.id)
    .subscribe({
      next: game => this.game = game,
      error: err => console.log(err),
      complete: () => console.log("delete game - completed")
    });
    alert("This game has been deleted");
  }

  displayDeveloper(){
    this.updateDevBool = true;
  }

  displayEditor(){
    this.updateEditBool = true;
  }

  updateDeveloper(){
    this.gameService.updateDeveloper(this.game.id, this.developer.id)
    .subscribe({
      next: game => this.game = game,
      error: err => console.log("echec"),
      complete: () => console.log("update developer of game - completed")
    });
    alert("Your developer's game has been changed");
  }

  updateEditor(){
    this.gameService.updateEditor(this.game.id, this.editor.id)
    .subscribe({
      next: game => this.game = game,
      error: err => console.log("echec"),
      complete: () => console.log("update editor of game - completed")
    });
    alert("Your editor's game has been changed");
  }

  isConnected(){
    return this.userService.isConnected;
  }

  addToList(){
    if(this.isConnected()){
      this.userService.addGameToFavorites(this.user.id, this.game.id)
    .subscribe({
      next: user => this.user = user,
      error: err => console.log("echec"),
      complete: () => console.log("update favorites - completed")
    });
    alert("This game has been added to your list")
    }

  } 
}
