import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Developer } from '../model/developer.model';
import { developerForm } from '../model/developerForm.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private readonly BASE_URL = "http://localhost:8585/developer";
  public refreshSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private client: HttpClient) { }

  //GET - DELETE
  getDevelopers(): Observable<Developer[]> {
    return this.client.get<Developer[]>(this.BASE_URL);
  }

  getDeveloper(id: number): Observable<Developer>{
    return this.client.get<Developer>(this.BASE_URL + "/" + id);
  }

  //POST - PUT - PATCH
  addDeveloper(form: developerForm): Observable<Developer>{
    return this.client.post<Developer>(this.BASE_URL + "/insert", form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  updateDeveloper(form: developerForm, id: number): Observable<Developer>{
    return this.client.put<Developer>(this.BASE_URL + "/update/"+ id, form).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }

  deleteDeveloper(id: number): Observable<Developer>{
    return this.client.delete<Developer>(this.BASE_URL + "/delete/" + id).pipe(
      tap(() => this.refreshSubject.next(''))
    );
  }



}
