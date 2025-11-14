import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-movie.html',
  styleUrls: ['./add-movie.css']
})
export class AddMovieComponent {
  movieForm: FormGroup;
  loading = false;
  message = '';

  constructor(private fb: FormBuilder, private movieService: MoviesService) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      director: ['', Validators.required],
      studio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.movieForm.invalid) return;

    this.loading = true;
    this.movieService.addMovie(this.movieForm.value).subscribe({
      next: () => {
        this.message = '🎬 Película agregada correctamente';
        this.loading = false;
        this.movieForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error al agregar película';
        this.loading = false;
      }
    });
  }
}
