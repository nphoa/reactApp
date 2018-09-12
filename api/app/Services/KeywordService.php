<?php
namespace App\Services;
use App\Keyword;
use App\KeywordType;
class KeywordService {
    public function getAll(){
        $data = null;
        try{
            $data =  Keyword::all();
            if(count($data) > 0){
                foreach ($data as $item){
                    $keywordDetail = KeywordType::where('idKeyword',$item->id)->get();
                    $item->keywordDetail = $keywordDetail;
                }
            }
        }catch (\Exception $ex){
            $data = null;
        }
        return $data;
    }
}
