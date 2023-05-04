<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\UserAuthController;
use App\Http\Controllers\Api\GoogleController;

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

Route::middleware('auth:sanctum')->get('/sessions', function (Request $request) {
    return response([
        'sessions' => session()->all()
    ], 200);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('login', [UserAuthController::class, 'login']);
    Route::post('register', [UserAuthController::class, 'register']);
    Route::get('check-verification-email-token/{token}', [UserAuthController::class, 'checkEmailVerificationToken']);
    Route::any('google/login', [GoogleController::class, 'redirectToGoogle']);
    Route::get('google/callback', [GoogleController::class, 'handleGoogleCallback']);

    Route::middleware('auth:sanctum')->post('logout', [UserAuthController::class, 'logout']);
});

Route::group(['middleware' => ['auth:sanctum']], function () {
});
