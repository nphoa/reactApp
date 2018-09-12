<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;

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
}
