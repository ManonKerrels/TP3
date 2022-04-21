import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../model/user.model';
import { UserConnection } from '../model/userConnection.model';
import { userForm } from '../model/userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";
  obsUserIsConnected: any;

  constructor(private client: HttpClient) { }

  // CONNECTED - DISCONNECTED
  connection(formConnect: UserConnection): Observable<User>{

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(formConnect.username.trim() +":" + formConnect.password.trim())}`)
    }
    
    return this.client.post<User>(this.BASE_URL + "/login", formConnect).pipe(
      tap(() => {
        localStorage.setItem('connected',JSON.stringify(this.connected)); 
        // this.obsUserIsConnected.next(this.connected);
      }),
      catchError((err) => {
        alert("Le pseudo ou le mot de passe est incorrect");
        return throwError(() => "erreur")
      } )
    )
    
    
    
    // .subscribe({
    //   next: () => {
    //     localStorage.setItem('connected',JSON.stringify(this.connected)); 
    //     // this.obsUserIsConnected.next(this.connected);
    //   },
    //   error: err => alert("Le pseudo ou le mot de passe est incorrect"),
    // }); 
  }

  disconnection(){
    localStorage.removeItem('connected'); 
    // this.obsUserIsConnected.next(this.connected);
  }

  get connected(){
    return localStorage.getItem('connected') != null;
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
