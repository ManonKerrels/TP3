import { Component, Input, OnInit } from '@angular/core';
import { Editor } from 'src/app/model/editor.model';
import { Game } from 'src/app/model/game.model';
import { User } from 'src/app/model/user.model';
import { EditorService } from 'src/app/services/editor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {

  user!: User;

  games!: Game[];

  @Input()
  editor!: Editor;
  editors!: Editor[];

  editorDetails: boolean = false;
  buttonText!: String;

  constructor(private editorService: EditorService, private userService: UserService) { 
    this.user = userService.isUser;

    this.userService.refreshSubject.subscribe({
      next: () => {
        this.editorService.getEditors().subscribe({
        next: editors => this.editors = editors,
        error: err => console.log("echec"),
        complete: () => console.log("get editors - completed")
      });
      }
    })
  }

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
    alert("Editor has been deleted");
  }

  isConnected(){
    return this.userService.isConnected;
  }

}
