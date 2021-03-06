import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Editor } from '../model/editor.model';
import { editorForm } from '../model/editorForm.model';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private readonly BASE_URL = "http://localhost:8585/editor";
  public refreshSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private client: HttpClient) { }

  //GET - DELETE
  getEditors(): Observable<Editor[]> {
    return this.client.get<Editor[]>(this.BASE_URL);
  }

  getEditor(id: number): Observable<Editor>{
    return this.client.get<Editor>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH
  addEditor(form: editorForm): Observable<Editor>{
    return this.client.post<Editor>(this.BASE_URL + "/insert", form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  updateEditor(form: editorForm, id: number): Observable<Editor>{
    return this.client.put<Editor>(this.BASE_URL + "/update/"+ id, form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  deleteEditor(id: number): Observable<Editor>{
    return this.client.delete<Editor>(this.BASE_URL + "/delete/" + id).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

}
