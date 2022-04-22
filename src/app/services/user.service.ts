import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { User } from '../model/user.model';
import { UserConnection } from '../model/userConnection.model';
import { userForm } from '../model/userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";
  obsUserIsConnected: any;

  private connect = new Subject<null>();

  private _isConnected = false;

  user!: User;

  constructor(private client: HttpClient) { 
  }

  public get isConnected(){
    return this._isConnected;
  };

  public get isUser(){
    return this.user;
  }

  // CONNECTED - DISCONNECTED
  connection(formConnect: UserConnection){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(formConnect.username.trim() +":" + formConnect.password.trim())}`)
    }

    this.client.post<User>(this.BASE_URL + "/login", formConnect).subscribe({
      next: (user) => {
            this.user = user;
            this._isConnected = true;
            localStorage.setItem('connected',JSON.stringify(this.connected)); 
          },
      error: err => alert("Le pseudo ou le mot de passe est incorrect"),
    })
  }

  disconnection(){
    localStorage.removeItem('connected'); 
    this._isConnected = false;
  }


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

  getUser(id: number){
    return this.client.get<User>(this.BASE_URL + "/" + id);
  }

  // getUserByUsername(formConnect: UserConnection){
  //   return this.client.post<User>(this.BASE_URL + "/login", formConnect);
  // }

  //POST - PUT - PATCH USER
  addUser(form: userForm): Observable<User>{
    return this.client.post<User>(this.BASE_URL + "/insert", form);
  }

  updateUser(form: userForm, id: number){
    return this.client.put<User>(this.BASE_URL + "/update/" + id, form);
  }

  deleteUser(id:number){
    return this.client.delete<User>(this.BASE_URL + "/delete/" + id);
  }


}
