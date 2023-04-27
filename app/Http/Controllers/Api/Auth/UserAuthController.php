<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\UserLoginRequest;

class UserAuthController extends Controller
{
    public function login(UserLoginRequest $request) {
        return response($request->all(), 200);
    }
}
