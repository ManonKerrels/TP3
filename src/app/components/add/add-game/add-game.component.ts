import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GAME_INSERT_FORM } from 'src/app/forms/game.form';
import { Developer } from 'src/app/model/developer.model';
import { Editor } from 'src/app/model/editor.model';
import { Game } from 'src/app/model/game.model';
import { DeveloperService } from 'src/app/services/developer.service';
import { EditorService } from 'src/app/services/editor.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  developers!: Developer[];

  developer!: Developer;

  editor!: Editor[];

  game!: Game;

  id!: number;

  form = new FormGroup({
    'title': new FormControl(undefined),
    'releaseDate': new FormControl(undefined),
    'genre': new FormControl(undefined),
    'portage': new FormControl(undefined),
    'getLicence': new FormControl(undefined),
    'developer': new FormControl(undefined),
    'editor': new FormControl(undefined)
  })

  constructor(private gameService: GameService, private builder: FormBuilder, private developerService: DeveloperService, private editorService: EditorService) {
    this.developerService.getDevelopers().subscribe({
      next: developers => this.developers = developers,
      error: err => console.log("echec"),
      complete: () => console.log("get developers - completed")
    });
    this.editorService.getEditors().subscribe({
      next: editors => this.editor = editors,
      error: err => console.log("echec"),
      complete: () => console.log("get editors - completed")
    });
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
