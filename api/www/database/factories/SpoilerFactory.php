<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Spoiler;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Spoiler::class, function (Faker $faker) {
    return [
        "description"=> $faker->text(),
        "titre"=> $faker->name,
        "titre_original"=> $faker->name,
        "id_themoviedb"=> 37165,
        "valid"=> 1
    ];
});
