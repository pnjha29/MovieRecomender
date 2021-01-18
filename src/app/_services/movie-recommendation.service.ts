import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class MovieRecommendationService {
  currentUser;
  constructor(private _http: HttpClient, private token: TokenStorageService) {
    this.currentUser = this.token.getUser();
  }

  getlast10(): Observable<any> {
    const header = {
      "userId": this.currentUser.username
    };
    return this._http.get('/api/history/getLast10', { headers: header });
  }

  getMovies(): Observable<any> {
    return this._http.get('/api/auth/movie/list');
  }

  getRecommendation(): Observable<any> {
    const header = {
      "userId": this.currentUser.username
    };
    return this._http.get('/api/history/recommendation', { headers: header })
  }

  addToWatchList(payload): Observable<any> {
    const header = {
      "userId": this.currentUser.username
    };
    return this._http.post('/api/history/add', payload, { headers: header });
  }
}
