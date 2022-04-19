import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GAME_INSERT_FORM } from 'src/app/forms/game.form';
import { Game } from 'src/app/model/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  game!: Game;
  id!: number;

  form = new FormGroup({
    'title': new FormControl(undefined),
    'releaseDate': new FormControl(undefined),
    'genre': new FormControl(undefined),
    'portage': new FormControl(undefined),
    'getLicence': new FormControl(undefined)
  })

  constructor(private gameService: GameService, private builder: FormBuilder, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.form = builder.group(GAME_INSERT_FORM);
    this.onSubmit();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.gameService.updateGame(this.form.value, this.id)
      .subscribe({
        next: game => this.game = game,
        error: err => console.log("echec"),
        complete: () => console.log("update game - completed")
      })
    } else{
      console.log("error");
    }
  }

}
