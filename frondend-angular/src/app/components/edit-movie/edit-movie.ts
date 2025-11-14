import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService, Movie } from '../../services/movies';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-movie.html',
  styleUrls: ['./edit-movie.css']
})
export class EditMovieComponent implements OnInit {
  movieForm!: FormGroup;
  movieId!: number;
  message = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario aquí, no al declararlo
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      director: ['', Validators.required],
      studio: ['', Validators.required]
    });

    // Obtener ID desde la URL
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos de la película a editar
    this.moviesService.getMovieById(this.movieId).subscribe({
      next: (movie: Movie) => {
        // Convertimos el año a string para evitar error de tipo
        this.movieForm.patchValue({
          title: movie.title,
          year: String(movie.year),
          director: movie.director,
          studio: movie.studio
        });
      },
      error: (err) => console.error('Error al obtener la película:', err)
    });
  }

  onSubmit(): void {
    if (this.movieForm.invalid) return;

    this.loading = true;
    this.moviesService.updateMovie(this.movieId, this.movieForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.message = 'Película actualizada con éxito 🎬';
        setTimeout(() => this.router.navigate(['/movies']), 1500);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al actualizar:', err);
        this.message = 'Error al actualizar la película';
      }
    });
  }
}
