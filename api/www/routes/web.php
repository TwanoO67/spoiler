<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {

//en fixe :
/*    $tasks = [
            'Dev first part',
            'Dev second part',
            'Dev third part'
    ]; */

//    return view('test', compact('tasks'));

// en db :
    $tasks = DB::table('spoilers')->get();
    //auto return en json :
    //return $tasks;

    return view('test', compact('tasks'));

});

//Route::get('/spoilers', 'SpoilersController@index');

//Route::get('/spoilers/{spoiler}', 'SpoilersController@show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
