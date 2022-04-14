import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Editor } from '../model/editor.model';
import { editorForm } from '../model/editorForm.model';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private readonly BASE_URL = "http://localhost:8080/editor";

  constructor(private client: HttpClient) { }

  //GET - DELETE
  getEditors(): Observable<Editor[]> {
    return this.client.get<Editor[]>(this.BASE_URL);
  }

  getEditor(id: number){
    return this.client.get<Editor>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH
  addEditor(form: editorForm): Observable<Editor>{
    return this.client.post<Editor>(this.BASE_URL + "/insert", form);
  }

  updateEditor(form: editorForm, id: number){
    return this.client.put<Editor>(this.BASE_URL + "/update/"+ id, form);
  }

}
