<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\UserLoginRequest;
use App\Http\Requests\Auth\UserRegisterRequest;

use App\Models\User;
use App\Models\EmailVerificationToken;

class UserAuthController extends Controller
{
    public function login(UserLoginRequest $request) {
        return response($request->all(), 200);
    }

    public function register(UserRegisterRequest $request) {

        $created_user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_verify' => false,
            'google_authenticated' => false,
        ]);

        if($created_user) {
            $str_token = Str::random(12);

            $created_email_token = EmailVerificationToken::create([
                'user_id' => $created_user->id,
                'email' => $request->email,
                'token' => $str_token
            ]);

            if($created_email_token) return response([
                'status' => true,
                'email_token' => $created_email_token->token,
                'message' => 'Register Successfully'
            ], 201);
        }
    }

    public function checkEmailVerificationToken(Request $request) {
        $token = EmailVerificationToken::where('token', $request->token)->first();

        if($token) return response()->json([
            'status' => true,
            'email' => $token->email,
            'message' => 'Verification Exist'
        ], 201);
    }
}
