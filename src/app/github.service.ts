/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }
}*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getRepositories(username: string, page: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    const params = new HttpParams().set('page', page.toString()).set('per_page', pageSize.toString());

    return this.http.get(url, { params });
  }
}

