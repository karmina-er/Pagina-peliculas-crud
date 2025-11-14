import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesService, Movie } from '../../services/movies';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: data => {
        console.log('Datos recibidos:', data); // <- revisa en la consola
        this.movies = data;
      },
      error: err => console.error('Error al cargar películas:', err)
    });
  }
}
