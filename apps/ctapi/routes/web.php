<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->group(
    [
        'prefix' => 'v1/users'
    ], function () use ($router) {
        $router->get('/',  ['uses' => 'UserController@showAllPersons']);
        $router->get('/{username}', ['uses' => 'UserController@showUserByUsername']);
        $router->post('/register', ['uses' => 'UserController@register']);
        $router->post('/login', ['uses' => 'UserController@postLogin']);
});

$router->group(
    [
        'prefix' => 'v1/bikes'
    ], function () use ($router) {
        $router->post('/search',  ['uses' => 'BikeController@showSearchedBikes']);
        $router->post('/add', ['uses' => 'BikeController@addBike']);
        $router->post('/edit', ['uses' => 'BikeController@EidtBike']);
        $router->get('/{id}', ['uses' => 'BikeController@showBikeById']);
        $router->post('/availability', ['uses' => 'BikeController@isBikeAvailabile']);
});


$router->group(
    [
        'prefix' => 'v1/orders'
    ], function () use ($router) {
    // $router->get('/',  ['uses' => 'UserController@showAllPersons']);
    $router->get('/{id}', ['uses' => 'OrderController@showOrderById']);
    $router->post('/create', ['uses' => 'OrderController@createOrder']);
    $router->post('/payment', ['uses' => 'OrderController@paymenOfOrder']);
    $router->post('/edit', ['uses' => 'OrderController@updateOrder']);

});


//CT Routes 

$router->group(
    [
        'prefix' => 'v1/places'
    ], function () use ($router) {
        $router->get('/',  ['uses' => 'PlaceController@showAllPlaces']);
        $router->get('/{id}', ['uses' => 'PlaceController@showPlaceById']);
});

$router->group(
    [
        'prefix' => 'v1/tours'
    ], function () use ($router) {
        $router->get('/',  ['uses' => 'TourController@showAllTours']);
        $router->get('/{id}', ['uses' => 'TourController@showTourById']);
});

$router->group(
    [
        'prefix' => 'v1/cities'
    ], function () use ($router) {
        $router->get('/{id}', ['uses' => 'CityController@showCityById']);
});

$router->group(
    [
        'prefix' => 'v1/vectors'
    ], function () use ($router) {
        $router->get('/', ['uses' => 'VectorController@showAllVectors']);
});



