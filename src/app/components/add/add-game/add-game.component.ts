import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GAME_INSERT_FORM } from 'src/app/forms/game.form';
import { Game } from 'src/app/model/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  game!: Game;

  form = new FormGroup({
    'title': new FormControl(undefined),
    'date': new FormControl(undefined),
    'genre': new FormControl(undefined),
    'portage': new FormControl(undefined),
    'licence': new FormControl(undefined)
  })

  constructor(private gameService: GameService, private builder: FormBuilder) {
    this.form = builder.group(GAME_INSERT_FORM);
    this.addGame();
   }

  ngOnInit(): void {
  }

  addGame(){
    if(this.form.valid){
      this.gameService.addGame(this.game)
      .subscribe({
        next: game => this.game = game,
        error: err => console.log("echec"),
        complete: () => console.log("add game - completed")
      })
    } else{
      console.log("error");
    }
    
  }

}
