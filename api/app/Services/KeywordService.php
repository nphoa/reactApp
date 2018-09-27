<?php
namespace App\Services;

use App\Keyword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\KeywordType;
class KeywordService {
    public function getAll($dataSearch){
        $querySearch = [];
        try{
            $querySearch =  DB::table('keywords')->leftJoin('keyword_types','keywords.idType','=','keyword_types.id')
                ->select('keywords.*','keyword_types.type');

            if(isset($dataSearch['keyword'])){
                $querySearch = $querySearch->where('keywords.keyword','like','%'.$dataSearch['keyword'].'%');
            }
            if(isset($dataSearch['type'])){
                $querySearch = $querySearch->where('keyword_types.id',$dataSearch['type']);
            }
            if(isset($dataSearch['vietnamese'])){
                $querySearch = $querySearch->where('keywords.vietnamese','like','%'.$dataSearch['vietnamese'].'%');
            }
            $querySearch = $querySearch->get();
        }catch (\Exception $ex){
            $querySearch = null;
        }
        return $querySearch;
    }

    public function getAllKeywordType(){
        $data = null;
        try{
            $data = KeywordType::all();
        }catch (\Exception $ex){
            $data = null;
        }
        return $data;
    }

    public function saveKeyword($keyword){
        $result = null;
        try{
            if($keyword['id'] ==0){
                $keyword['created_by'] = Auth::user()->id;
                $keyword['updated_by'] = Auth::user()->id;
                $result = DB::table('keywords')->insert($keyword);
            }else{
                $keyword['updated_by'] = Auth::user()->id;
                unset($keyword['type']);
                $result  = DB::table('keywords')->where('id',$keyword['id'])->update($keyword);
            }
        }catch(\Exception $ex){
            $result = null;
        }
        return $result;
    }

    public function deleteKeyword($id){
        $deleteRows = null;
        try{
            $deleteRows = Keyword::where('id',$id)->delete();
        }catch (\Exception $ex){
            $deleteRows = null;
        }
        return $deleteRows;
    }

    public function searchKeyword($keyword){
        $result = null;
        try{

        }catch (\Exception $ex){

        }
        return $result;
    }
}
