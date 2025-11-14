import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  studio: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'http://127.0.0.1:8000/movies'; //ruta de laravel

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${id}`);
  }

  addMovie(movieData: any): Observable<any> {
  return this.http.post(this.baseUrl, movieData);
  }

  updateMovie(id: number, movieData: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, movieData);
  }

}
