import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game.model';

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
  addGame(game: Game): Observable<Game>{
    return this.client.post<Game>(this.BASE_URL, game);
  }

}
