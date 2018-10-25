<?php
namespace App\Repositories\eloquent;
use App\Repositories\KeywordRepositoryInterface;
use App\Models\Keyword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class KeywordRepository implements KeywordRepositoryInterface{
    public function getAll($dataSearch)
    {
        $querySearch = [];
//        $data =  DB::table('keywords')
//                    ->join('keyword_types','keywords.idType','=','keyword_types.id')
//                    ->select('keywords.*','keyword_types.vietnamese as type')
//                    ->get();
        $querySearch =  DB::table('keywords')
                            ->leftJoin('keyword_types','keywords.idType','=','keyword_types.id')
                            ->select('keywords.*','keyword_types.type as type');

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
        return $querySearch;
    }
    public function save(Keyword $keyword)
    {
        try{
            $keyword->save();
        }catch(\Exception $ex){
             return null;
        }
        return $keyword;
    }

    public function getKeywordById(int $id)
    {
        return ($id==0) ? new Keyword() : Keyword::find($id);
    }

    public function deleteKeywordById(int $id)
    {
        $deletedRows = null;
        try{
            $deletedRows = Keyword::where('id', $id)->delete();
        }catch(\Exception $ex){
            return null;
        }
        return $deletedRows;
    }
}
