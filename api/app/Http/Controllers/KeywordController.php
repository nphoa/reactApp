<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\KeywordService;
class KeywordController extends Controller
{
    protected $keywordService;
    public function __construct(KeywordService $keywordService)
    {
        $this->keywordService = $keywordService;
    }

    public function getAll(){
        $data = $this->keywordService->getAll();
        return  response()->json(['status' => 200, 'data' => $data]);
    }

    public function saveKeyword(Request $res)
    {
        $keyword = json_decode($res->get('keyword'),true);

        $data = $this->keywordService->saveKeyword($keyword);
        if($data == true){
            $response = ['status' => 200, 'data' => 1];
        }else{
            $response = ['status' => 500, 'data' => 0];
        }
        return response()->json($response);
    }

    public function deleteKeyword(Request $res){
        $id = $res->get('id');
        $data = $this->keywordService->deleteKeyword($id);
        if($data==1){
            $response = ['status' => 200, 'data' => 1];
        }else{
            $response = ['status' => 500, 'data' => 0];
        }
        return response()->json($response);
    }

    public function searchKeyword(Request $res){
        $keyword = $res->get('keywordSearch');

    }
}
