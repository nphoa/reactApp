<?php
namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\KeywordType;
class KeywordService {
    public function getAll(){
        $data = null;
        try{
            $data =  DB::table('keywords')->leftJoin('keyword_types','keywords.id','=','keyword_types.id')
                ->select('keywords.*','keyword_types.type')->get();
        }catch (\Exception $ex){
            $data = null;
        }
        return $data;
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

                $result = DB::table('keywords')->where('id',$keyword['id'])->update($keyword);
            }
            dd($result);
        }catch(\Exception $ex){
            $result = null;
        }
    }
}
