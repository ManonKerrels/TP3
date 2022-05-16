import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../model/developer.model';
import { developerForm } from '../model/developerForm.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private readonly BASE_URL = "http://localhost:8585/developer";

  constructor(private client: HttpClient) { }

  //GET - DELETE
  getDevelopers(): Observable<Developer[]> {
    return this.client.get<Developer[]>(this.BASE_URL);
  }

  getDeveloper(id: number){
    return this.client.get<Developer>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH
  addDeveloper(form: developerForm){
    return this.client.post<Developer>(this.BASE_URL + "/insert", form);
  }

  updateDeveloper(form: developerForm, id: number){
    return this.client.put<Developer>(this.BASE_URL + "/update/"+ id, form);
  }

  deleteDeveloper(id: number){
    return this.client.delete<Developer>(this.BASE_URL + "/delete/" + id);
  }



}
