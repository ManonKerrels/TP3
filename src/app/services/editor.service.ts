import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Editor } from '../model/editor.model';

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
  addEditor(editor: Editor): Observable<Editor>{
    return this.client.post<Editor>(this.BASE_URL, editor);
  }

}
