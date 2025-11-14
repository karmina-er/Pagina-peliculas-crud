import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies';
import { MovieComponent } from './components/movie/movie';
import { AddMovieComponent } from './components/add-movie/add-movie';
import { EditMovieComponent } from './components/edit-movie/edit-movie';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'movies/add', component: AddMovieComponent },
  { path: 'movies/edit/:id', component: EditMovieComponent }
];
