import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = environment.apiUrl;
  repo = new BehaviorSubject<any[]>(null);
  repos$ = this.repo.asObservable();

  constructor(private http: HttpClient) { }

  getResposFromUser(user: string): any {
    const endpoint = `${this.apiUrl}users/${user}/repos`;
    return this.http.get(endpoint, {observe: 'response'});
  }

  serviceSendRepos(repositorios): any{
    this.repo.next(repositorios);
  }

}
