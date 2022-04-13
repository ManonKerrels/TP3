import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EDITOR_INSERT_FORM } from 'src/app/forms/game.form';
import { Editor } from 'src/app/model/editor.model';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-add-editor',
  templateUrl: './add-editor.component.html',
  styleUrls: ['./add-editor.component.css']
})
export class AddEditorComponent implements OnInit {

  editor!: Editor;

  form = new FormGroup({
    'name': new FormControl,
    'company': new FormControl,
    'date': new FormControl
  })

  constructor(private editorService: EditorService, private builder: FormBuilder) {
    this.form = builder.group(EDITOR_INSERT_FORM);
    this.addEditor();
   }

  ngOnInit(): void {
  }

  addEditor(){
    if(this.form.valid){
      this.editorService.addEditor(this.editor)
        .subscribe({
          next: editor => this.editor = editor,
          error: err => console.log("echec"),
          complete: () => console.log("add editor - completed")
        })
    } else{
      console.log("error");
    }

  }

}
