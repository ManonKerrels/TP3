import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../model/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private readonly BASE_URL = "http://localhost:8080/developer";

  constructor(private client: HttpClient) { }

  getDevelopers(): Observable<Developer[]> {
    return this.client.get<Developer[]>(this.BASE_URL);
  }

  getDeveloper(id: number){
    return this.client.get<Developer>(this.BASE_URL + "/" + id);
  }

}
