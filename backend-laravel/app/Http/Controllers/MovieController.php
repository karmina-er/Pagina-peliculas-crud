<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    // GET: Todos los registros
    public function index()
    {
        $movies = Movie::all();
        return response()->json($movies, 200);
    }

    // GET: Registro por ID
    public function show($id)
    {
        $movie = Movie::find($id);
        if ($movie) {
            return response()->json($movie, 200);
        } else {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }
    }

    // POST: Crear registro
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'synopsis' => 'required|string',
            'year' => 'required|integer',
            'cover' => 'required|string|max:255'
        ]);

        $movie = Movie::create($request->all());

        return response()->json([
            'message' => 'Película creada correctamente',
            'movie' => $movie
        ], 201);
    }

    // PUT: Actualizar registro
    public function update(Request $request, $id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'synopsis' => 'sometimes|required|string',
            'year' => 'sometimes|required|integer',
            'cover' => 'sometimes|required|string|max:255'
        ]);

        $movie->update($request->all());

        return response()->json([
            'message' => 'Película actualizada correctamente',
            'movie' => $movie
        ], 200);
    }

    // DELETE: Eliminar registro
    public function destroy($id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $movie->delete();

        return response()->json(['message' => 'Película eliminada correctamente'], 200);
    }
}
