<?php

namespace App\Http\Controllers;

use App\Models\Keyword;
use Illuminate\Http\Request;
use App\Repositories\KeywordRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class KeywordController extends Controller
{
    protected $keywordRepositoryInterface;
    public function __construct(KeywordRepositoryInterface $keywordRepositoryInterface)
    {
        $this->keywordRepositoryInterface = $keywordRepositoryInterface;
    }

    public function getAll(Request $req){
        $dataSearch = null;
        $page = 1;
        if($req->isMethod('post')){
            $dataSearch = json_decode($req->get('dataSearch'),true);
        }else{
            $page = $req->get('page');
        }
        $data = $this->keywordRepositoryInterface->getAll($dataSearch,$page);
        return  response()->json(['status' => 200, 'data' => $data]);
    }

    public function saveKeyword(Request $res)
    {
        $resData = json_decode($res->get('keyword'),true);

        $keyword = $this->keywordRepositoryInterface->getKeywordById($resData['id']);
        $keyword->keyword = $resData['keyword'];
        $keyword->idType = $resData['idType'];
        $keyword->vietnamese = $resData['vietnamese'];
        if($keyword->id ==0){
            $keyword->created_by = Auth::user()->id;
            $keyword->updated_by = Auth::user()->id;
        }else{
            $keyword->updated_by = Auth::user()->id;
            //unset($resData['type']);
            //$result  = DB::table('keywords')->where('id',$keyword['id'])->update($keyword);
        }
        $keyword = $this->keywordRepositoryInterface->save($keyword);
        if($keyword){
            $response = ['status' => 200, 'data' => 1];
        }else{
            $response = ['status' => 500, 'data' => 0];
        }
        return response()->json($response);
    }

    public function deleteKeyword(Request $res){
        $id = $res->get('id');
        $data = $this->keywordRepositoryInterface->deleteKeywordById($id);
        if($data==1){
            $response = ['status' => 200, 'data' => 1];
        }else{
            $response = ['status' => 500, 'data' => 0];
        }
        return response()->json($response);
    }

    public function searchKeyword(Request $res){
        $resData = json_decode($res->get('dataSearch'),true);
        $data = $this->keywordRepositoryInterface->getAll($resData);
        return  response()->json(['status' => 200, 'data' => $data]);
    }
}
