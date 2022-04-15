import { Component, Input, OnInit } from '@angular/core';
import { Editor } from 'src/app/model/editor.model';
import { Game } from 'src/app/model/game.model';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {

  games!: Game[];

  @Input()
  editor!: Editor;

  editorDetails: boolean = false;
  buttonText!: String;

  constructor(private editorService: EditorService) { }

  ngOnInit(): void {
  }

  onDetail(){
    if(this.buttonText === "Check details"){
      this.editorDetails = true;
      this.buttonText = "Unckeck details";
    } else {
      this.editorDetails = false;
      this.buttonText = "Check details";
    }
  }

  deleteEditor(){
    this.editorService.deleteEditor(this.editor.id)
    .subscribe({
      next: editor => this.editor = editor,
      error: err => console.log("echec"),
      complete: () => console.log("delete editor - completed")
    });
  }

}
