<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/spoilers', 'SpoilersController@index');

Route::get('/spoilers/{spoiler}', 'SpoilersController@show');

Route::post('/spoilers', 'SpoilersController@store');

Route::put('/spoilers/{id}', 'SpoilersController@update');

Route::delete('/spoilers/{spoiler}', 'SpoilersController@delete');
