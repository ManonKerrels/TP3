import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    'releaseDate': new FormControl(undefined),
    'genre': new FormControl(undefined),
    'portage': new FormControl(undefined),
    'getLicence': new FormControl(undefined)
  })

  constructor(private gameService: GameService, private builder: FormBuilder) {
    this.form = builder.group(GAME_INSERT_FORM);
    this.onSubmit();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.gameService.addGame(this.form.value)
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
