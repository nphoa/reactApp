<?php
namespace App\Repositories\eloquent;
use App\Repositories\KeywordRepositoryInterface;
use App\Models\Keyword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class KeywordRepository implements KeywordRepositoryInterface{
    public function getAll($dataSearch,$page)
    {
        //dd($dataSearch,$page);
        //$pageSize = 5;
        $querySearch = [];
//        $data =  DB::table('keywords')
//                    ->join('keyword_types','keywords.idType','=','keyword_types.id')
//                    ->select('keywords.*','keyword_types.vietnamese as type')
//                    ->get();
       // $totalItems = Keyword::all()->count();

        //$totalPages =   ceil($totalItems/$pageSize);

        //$startPage = 1;
       // $endPage = $totalPages;

        //$startIndex = ($page - 1) * $pageSize;
       // $endIndex = ($startIndex + $pageSize) - 1;
        //dd($startIndex,$endIndex);
        //dd($startPage,$endPage);
//        $pages = [];
//        for ($i = $startPage;$i<=$endPage;$i++){
//            $pages[] = $i;
//        }
        //dd($pages);
        //dd($totalItems);
        $pager = $this->getPager($page);
        $querySearch =  DB::table('keywords')
                            ->leftJoin('keyword_types','keywords.idType','=','keyword_types.id')
                            ->select('keywords.*','keyword_types.type as type');

        if($dataSearch != null &&  $dataSearch['keyword'] != ''){
            $querySearch = $querySearch->where('keywords.keyword','like','%'.$dataSearch['keyword'].'%');
        }
        if($dataSearch != null &&$dataSearch['type'] != ''){
            $querySearch = $querySearch->where('keyword_types.id',$dataSearch['type']);
        }
        if($dataSearch != null && $dataSearch['vietnamese'] != ''){
            $querySearch = $querySearch->where('keywords.vietnamese','like','%'.$dataSearch['vietnamese'].'%');
        }

        $querySearch = $querySearch->offset($pager['startIndex'])->limit($pager['pageSize'])->get();

        return [
            'pager'         => $pager,
            'querySearch'   => $querySearch
        ];
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

    public function getPager($page){
        $pageSize = 5;

        $totalItems = Keyword::all()->count();
        $totalPages =   ceil($totalItems/$pageSize);

        $startPage = 1;
        $endPage = $totalPages;

        $startIndex = ($page - 1) * $pageSize;
        $endIndex = ($startIndex + $pageSize) - 1;

        $pages = [];
        for ($i = $startPage;$i<=$endPage;$i++){
            $pages[] = $i;
        }

        return [
            'currentPage'=>$page,
            'pageSize'   => $pageSize,
            'totalPages' => $totalPages,
            'startIndex' => $startIndex,
            'endIndex'   => $endIndex,
            'pages'      => $pages
        ];
    }
}
