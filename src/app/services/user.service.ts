import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Game } from '../model/game.model';
import { Jwt } from '../model/jwt.model';
import { User } from '../model/user.model';
import { UserConnection } from '../model/userConnection.model';
import { userForm } from '../model/userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8585/user";
  public refreshSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
  obsUserIsConnected: any;

  JWT!: Jwt | null;

  private connect = new Subject<null>();

  private _isConnected = false;

  user!: User;

  game!: Game;

  constructor(private client: HttpClient) { 
  }

  public get isConnected(){
    return this._isConnected;
  };

  public get isUser(){
    return this.user;
  }

  // CONNECTED - DISCONNECTED
  connection(formConnect: UserConnection): User{

    this.client.post<Jwt>(this.BASE_URL + "/login", formConnect).subscribe({
      next: (JWT) => {
            this.JWT = JWT;
            this._isConnected = true;
            localStorage.setItem('connected',JSON.stringify(this.connected));

            this.client.get<User>(this.BASE_URL + "?username=" + JWT.username).subscribe({
              next: user => this.user = user,
              error: err => console.log("Username " + JWT.username + " not found")
            })
          },
      error: err => alert("Username or password incorrect")
    });

    return this.user;
  }

  disconnection(){
    localStorage.removeItem('connected'); 
    this._isConnected = false;
    this.JWT = null;
  }

  // refreshUser(){
  //   //méthode pour rafraîchir la page à chaque fois qu'il y a un changement
  // }


  get connected(){
    return localStorage.getItem('connected') != null
  }

  public get $connected(): Observable<null>{
    return this.connect;
  }

  //GET - DELETE USER
  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.BASE_URL);
  }

  getUser(id: number): Observable<User>{
    return this.client.get<User>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH USER
  addUser(form: userForm): Observable<User>{
    return this.client.post<User>(this.BASE_URL + "/insert", form);
  }

  updateUser(form: userForm, id: number): Observable<User>{
    return this.client.put<User>(this.BASE_URL + "/update/" + id, form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  deleteUser(id:number): Observable<User>{
    return this.client.delete<User>(this.BASE_URL + "/delete/" + id);
  }

  addGameToFavorites(id: number, idGame: number): Observable<User>{
    return this.client.patch<User>(this.BASE_URL + "/update/" + id + "/fav/" + idGame, null).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }


}
