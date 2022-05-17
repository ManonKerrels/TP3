import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Game } from '../model/game.model';
import { gameForm } from '../model/gameForm.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly BASE_URL = "http://localhost:8585/game";
  public refreshSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private client: HttpClient) { }

  //GET - DELETE
  getGames(): Observable<Game[]> {
    return this.client.get<Game[]>(this.BASE_URL);
  }

  getGame(id: number): Observable<Game>{
    return this.client.get<Game>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH
  addGame(form: gameForm): Observable<Game>{
    return this.client.post<Game>(this.BASE_URL + "/insert", form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  updateGame(form: gameForm, id: number): Observable<Game>{
    return this.client.put<Game>(this.BASE_URL + "/update/" + id, form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  deleteGame(id:number): Observable<Game>{
    return this.client.delete<Game>(this.BASE_URL + "/delete/" + id).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  //UPDATE DEV + EDIT
  updateDeveloper(id: number, idDeveloper: number): Observable<Game>{
    return this.client.put<Game>(this.BASE_URL + "/updateDev/" + id + "/developer/" + idDeveloper, null).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  updateEditor(id: number, idEditor: number): Observable<Game>{
    return this.client.put<Game>(this.BASE_URL + "/updateEdit/" + id + "/editor/" + idEditor, null).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

}
