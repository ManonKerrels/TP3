import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { developerForm } from '../model/developerForm.model';
import { editorForm } from '../model/editorForm.model';
import { Game } from '../model/game.model';
import { gameForm } from '../model/gameForm.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly BASE_URL = "http://localhost:8080/game";

  constructor(private client: HttpClient) { }

  //GET - DELETE
  getGames(): Observable<Game[]> {
    return this.client.get<Game[]>(this.BASE_URL);
  }

  getGame(id: number){
    return this.client.get<Game>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH
  addGame(form: gameForm): Observable<Game>{
    return this.client.post<Game>(this.BASE_URL + "/insert", form);
  }

  updateGame(form: gameForm, id: number){
    return this.client.put<Game>(this.BASE_URL + "/update/" + id, form);
  }

  deleteGame(id:number){
    return this.client.delete<Game>(this.BASE_URL + "/delete/" + id);
  }

  //UPDATE DEV + EDIT
  updateDeveloper(id: number, idDeveloper: number){
    return this.client.put<Game>(this.BASE_URL + "/updateDev/" + id + "/developer/" + idDeveloper, null);
  }

  updateEditor(id: number, idEditor: number){
    return this.client.put<Game>(this.BASE_URL + "/updateEdit/" + id + "/editor/" + idEditor, null);
  }

}
