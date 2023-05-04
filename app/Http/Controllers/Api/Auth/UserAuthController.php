<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\UserLoginRequest;
use App\Http\Requests\Auth\UserRegisterRequest;
use Carbon\Carbon;

use App\Models\User;
use App\Models\EmailVerificationToken;

class UserAuthController extends Controller
{
    public function login(UserLoginRequest $request) {

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                'errors' => [
                    'status' => false,
                    'message' => 'Invalid Email or Password. Check your login credentials and try again.'
                ],
                'message' => 'Invalid Credentials'
            ], 403);
        }

        if(!$user->email_verified_at) {
            return response()->json([
                'errors' => [
                    'status' => false,
                    'message' => 'Oops! Verify your email first to continue.'
                ],
                'message' => 'Email is not verified.'
            ], 403);
        }
        $token = $user->createToken($request->device_name)->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user], 200);
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

    public function verifyEmail(Request $request) {
        $email = $request->email;

        $user = User::where('email', $email)->first();
        if(!$user) echo('Email Address not found');

        $user->email_verified_at = Carbon::now();
        $user->is_verify = true;
        $email_verified = $user->save();

        if($user) return redirect('/verification-success');
    }

    public function logout(Request $request) {
        $tokenId = Str::before($request->bearerToken(), '|');
        $removeToken = $request->user()->tokens()->where('id', $tokenId)->delete();

        if($removeToken) return response([
            'status' => true,
            'message' => 'Logout Successfully'
        ], 200);

        // if wasn't successfully remove the token or the token not found
        return response([
            'status' => true,
            'message' => 'Token not found'
        ], 400);
    }
}
