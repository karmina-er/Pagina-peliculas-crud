<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                DB::table('movies')->insert([
            [
                'title' => 'El Rey León',
                'synopsis' => 'Simba, un joven león, debe asumir su destino como rey de la sabana tras la muerte de su padre.',
                'year' => 1994,
                'cover' => 'el_rey_leon.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'La Bella y la Bestia',
                'synopsis' => 'Bella, una joven valiente, descubre el amor verdadero con una Bestia encantada.',
                'year' => 1991,
                'cover' => 'bella_y_bestia.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Aladdín',
                'synopsis' => 'Aladdín encuentra una lámpara mágica y con la ayuda del Genio intenta conquistar el corazón de Jasmine.',
                'year' => 1992,
                'cover' => 'aladdin.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Frozen: Una aventura congelada',
                'synopsis' => 'Anna y Kristoff buscan a Elsa, cuya habilidad de crear hielo ha puesto al reino en invierno eterno.',
                'year' => 2013,
                'cover' => 'frozen.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Moana',
                'synopsis' => 'Moana, una joven navegante, se embarca en una aventura para salvar su isla con la ayuda del semidiós Maui.',
                'year' => 2016,
                'cover' => 'moana.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Mulan',
                'synopsis' => 'Mulan se disfraza de hombre para unirse al ejército y salvar a China de los invasores.',
                'year' => 1998,
                'cover' => 'mulan.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Cenicienta',
                'synopsis' => 'Cenicienta, con la ayuda de su hada madrina, asiste al baile real y encuentra su destino junto al príncipe.',
                'year' => 1950,
                'cover' => 'cenicienta.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Pocahontas',
                'synopsis' => 'La historia de Pocahontas y su relación con John Smith durante la llegada de los colonos ingleses.',
                'year' => 1995,
                'cover' => 'pocahontas.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Tiana y el Sapo',
                'synopsis' => 'Tiana, una joven trabajadora, descubre el amor y la magia tras besar a un príncipe convertido en sapo.',
                'year' => 2009,
                'cover' => 'tiana_sapo.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Rapunzel: Enredados',
                'synopsis' => 'Rapunzel, con su cabello mágico, escapa de su torre y descubre el mundo con la ayuda de Flynn Rider.',
                'year' => 2010,
                'cover' => 'rapunzel.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
