<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Aquí defines qué orígenes pueden hacer solicitudes a tu API.
    | Para desarrollo con Angular en localhost, permitimos todo.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie', '*'],

    'allowed_methods' => ['*'], // Permitimos todos los métodos: GET, POST, PUT, DELETE...

    'allowed_origins' => ['http://localhost:4200'], // Dirección de Angular

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Permitimos cualquier cabecera

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false, // Cambiar a true si usas cookies o autenticación
];
