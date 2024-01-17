<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::prefix('/user')->group(function () {
        Route::get('', function (Request $request) {
            return $request->user();
        });
    });

    Route::prefix('/shop')->group(function () {
        Route::post('/register', \App\Http\Controllers\Shop\RegisterShopController::class);
        Route::get('/search', \App\Http\Controllers\Shop\SearchShopByKeywordController::class)->name('api.shop.search.keyword');
    });
});

Route::post('test/token', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = Auth::user();
    $token = $user->createToken('api-token')->plainTextToken;

    return response()->json(['token' => $token]);
});
