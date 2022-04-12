import { Component, Input, OnInit } from '@angular/core';
import { Editor } from 'src/app/model/editor.model';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {

  @Input()
  editor!: Editor;

  editorDetails: boolean = false;
  buttonText!: String;

  constructor() { }

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

}
