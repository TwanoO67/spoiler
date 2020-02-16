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


Route::middleware('api')->group(function () {



    Route::prefix('spoiler')->group(function () {
        //Route::put('/', 'SpoilerController@create')->name('spoiler');

        Route::prefix('{spoiler}')->group(function () {
            //Route::get('/', 'ClientController@get')->name('spoiler.get');
            Route::put('/', 'SpoilerController@update')->name('spoiler.update');
            //Route::delete('/', 'ClientController@delete')->name('spoiler.delete');
        });
    });
    Route::resource('spoiler', 'SpoilerController');
});
