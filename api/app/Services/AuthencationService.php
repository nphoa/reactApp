<?php
namespace App\Services;
use App\User;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthencationService {
    public function register($user){
        $result = [];
        try{
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => bcrypt($user['password']),
            ]);
            $user = User::first();
            $token = JWTAuth::fromUser($user);

            $result['token'] = $token;
            $result['message'] = 'success';
            $result['status_code'] = 200;

        }catch (\Exception $ex){
            $result['token'] = null;
            $result['message'] = 'error';
            $result['status_code'] = 500;
        }
        return $result;
    }
    public function login($user){
        $result = [];
        $result['token'] = null;
        $result['user'] = null;
        try {
            if (! $token = JWTAuth::attempt($user)) {
                $result['message'] = 'invalid user';
                $result['status_code'] = 401;
            }else{
                $result['message'] = 'success';
                $result['status_code'] = 200;
                $result['user'] = Auth::user();
                $result['token'] = $token;
            }
        } catch (JWTException $e) {
            $result['message'] = 'could_not_create_toke';
            $result['status_code'] = 500;
        }
        return $result;
    }
}
