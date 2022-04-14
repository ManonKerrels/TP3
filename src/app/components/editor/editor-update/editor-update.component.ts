import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EDITOR_INSERT_FORM } from 'src/app/forms/game.form';
import { Editor } from 'src/app/model/editor.model';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-editor-update',
  templateUrl: './editor-update.component.html',
  styleUrls: ['./editor-update.component.css']
})
export class EditorUpdateComponent implements OnInit {

  editor!: Editor;
  id!: number;

  form = new FormGroup({
    'name': new FormControl(undefined),
    'parentCompany': new FormControl(undefined),
    'creationDate': new FormControl(undefined)
  })

  constructor(private editorService: EditorService, private builder: FormBuilder, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.form = builder.group(EDITOR_INSERT_FORM);
    this.onSubmit();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.editorService.updateEditor(this.form.value, this.id)
        .subscribe({
          next: editor => this.editor = editor,
          error: err => console.log("echec"),
          complete: () => console.log("update editor - completed")
        })
    } else{
      console.log("error");
    }
  }

}
