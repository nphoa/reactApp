<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Services\AuthencationService;
class AuthencationController extends Controller
{
    protected $authencationService;
    public function __construct(AuthencationService $authencationService)
    {
        $this->authencationService = $authencationService;
    }
    public function register(Request $req){
        $validator = Validator::make($req->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'name' => 'required',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $data = $this->authencationService->register($req->all());
        return response()->json(['message' => $data['message'],'token'=>$data['token']],$data['status_code']);
    }
    public function login(Request $req){

        $validator = Validator::make($req->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        //$credentials = $req->only('email', 'password');
        $result = $this->authencationService->login($req->all());
        return response()->json(['message' => $result['message'],'token'=>$result['token'],'user'=>$result['user']],$result['status_code']);


    }
}
