<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

// Rutas "API" en web.php
Route::get('/movies', [MovieController::class, 'index']);        // Todos los registros
Route::get('/movies/{id}', [MovieController::class, 'show']);    // Registro por ID
Route::post('/movies', [MovieController::class, 'store']);       // Crear registro
Route::put('/movies/{id}', [MovieController::class, 'update']);  // Actualizar registro
Route::delete('/movies/{id}', [MovieController::class, 'destroy']); // Eliminar registro
