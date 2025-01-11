import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class UserService {

  movieListURL = 'assets/mock_Service/movies.json';
  URLValue = new BehaviorSubject('');
  loggedIn = new BehaviorSubject(false);
  
  constructor(private http: HttpClient) { }

  getMovieList() {
    return this.http.get(this.movieListURL);
  }
}