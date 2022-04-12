import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Input()
  game!: Game;

  gameDetails: boolean = false;
  buttonText!: String;

  constructor() { }

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

}
