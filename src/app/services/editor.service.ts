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

  getEditors(): Observable<Editor[]> {
    return this.client.get<Editor[]>(this.BASE_URL);
  }

  getGame(id: number){
    return this.client.get<Editor>(this.BASE_URL + "/" + id);
  }

}
