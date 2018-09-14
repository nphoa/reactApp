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
Route::post('authencation/register','AuthencationController@register');
Route::post('authencation/login','AuthencationController@login');

Route::get('keyword/getAll','KeywordController@getAll')->middleware('jwt.auth');
Route::get('keyword/keywordTypes','KeywordTypeController@getAll')->middleware('jwt.auth');

Route::post('keyword/saveKeyword','KeywordController@saveKeyword')->middleware('jwt.auth');
Route::get('keyword/deleteKeyword','KeywordController@deleteKeyword')->middleware('jwt.auth');
