<?php
namespace App\Repositories\eloquent;
use App\Repositories\KeywordRepositoryInterface;
use App\Models\Keyword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class KeywordRepository implements KeywordRepositoryInterface{
    public function getAll($dataSearch,$page)
    {
        $pageSize = 10;
        $querySearch = [];
//        $data =  DB::table('keywords')
//                    ->join('keyword_types','keywords.idType','=','keyword_types.id')
//                    ->select('keywords.*','keyword_types.vietnamese as type')
//                    ->get();
        $totalItems = Keyword::all()->count();
        dd($totalItems);
        $querySearch =  DB::table('keywords')
                            ->leftJoin('keyword_types','keywords.idType','=','keyword_types.id')
                            ->select('keywords.*','keyword_types.type as type');

        if($dataSearch['keyword'] != ''){
            $querySearch = $querySearch->where('keywords.keyword','like','%'.$dataSearch['keyword'].'%');
        }
        if($dataSearch['type'] != ''){
            $querySearch = $querySearch->where('keyword_types.id',$dataSearch['type']);
        }
        if($dataSearch['vietnamese'] != ''){
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
