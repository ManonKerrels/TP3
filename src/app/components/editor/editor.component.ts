import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Editor } from 'src/app/model/editor.model';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Output()
  emitter = new EventEmitter<Editor[]>();
  
  editors!: Editor[];

  constructor(private editorService: EditorService) {
    this.getEditors();
   }

  ngOnInit(): void {
  }

  getEditors(){
    this.editorService.getEditors()
      .subscribe({
        next: editors => this.editors = editors,
        error: err => alert("echec"),
        complete: () => console.log("get editors - completed")
      })
  }

}
