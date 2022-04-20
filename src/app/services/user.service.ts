import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { userForm } from '../model/userForm.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/game";
  obsUserIsConnected: any;

  constructor(private client: HttpClient) { }

  // CONNECTED - DISCONNECTED
  connection(username : string, password : String){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(username.trim() +":" + password.trim())}`)
    }
    
    this.client.get(this.BASE_URL, header).subscribe({
      next: () => {
        localStorage.setItem('connected',JSON.stringify(this.connected)); 
        this.obsUserIsConnected.next(this.connected);
      },
      error: err => alert("Le pseudo ou le mot de passe est incorrect"),
    }); 
  }

  disconnection(){
    localStorage.removeItem('connected'); 
    this.obsUserIsConnected.next(this.connected);
  }


  get connected(){
    return localStorage.getItem('connected') != null
  }

  //GET - DELETE USER
  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.BASE_URL);
  }

  getUser(id: number){
    return this.client.get<User>(this.BASE_URL + "/" + id);
  }

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
