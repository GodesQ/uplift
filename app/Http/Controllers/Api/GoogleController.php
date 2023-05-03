<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

use App\Models\User;
use Carbon\Carbon;

class GoogleController extends Controller
{
    public function redirectToGoogle(Request $request)
    {
        $url = Socialite::driver('google')->stateless()->redirect()->getTargetUrl();
        return response($url);
    }

    public function handleGoogleCallback(Request $request)
    {
        $user = Socialite::driver('google')->stateless()->user();

        $created_user = User::updateOrCreate(
            ['email' => $user->email],
            ['firstname' => $user->user['given_name'],
            'lastname' => $user->user['family_name'],
            'fullname' => $user->name,
            'password' => Hash::make($user->name . $user->id),
            'email_verified_at' => Carbon::now(),
            'is_verify' => true,
            'google_authenticated' => true,
        ]);

        Auth::loginUsingId($created_user->id);

        $token = $request->user()->createToken('auth-token')->plainTextToken;

        if($created_user) return redirect('/auth/redirecting')->with('data', ['token' => $token]);
    }
}
