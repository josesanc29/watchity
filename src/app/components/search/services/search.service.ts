import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = environment.apiUrl;
  termino = new BehaviorSubject<any>('');
  repos$ = this.termino.asObservable();

  constructor(private http: HttpClient) { }

  getResposFromUser(user: string): any {
    const endpoint = `${this.apiUrl}users/${user}/repos`;
    return this.http.get(endpoint, {observe: 'response'});
  }

  sendMsg(mensaje): any{
    this.termino.next(mensaje);
  }

}
