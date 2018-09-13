<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\KeywordService;
class KeywordTypeController extends Controller
{
    protected $keywordService;
    public function __construct(KeywordService $keywordService)
    {
        $this->keywordService = $keywordService;
    }
    public function getAll(){
        $data = $this->keywordService->getAllKeywordType();
        return response()->json(['data'=>$data,'status'=>200]);
    }
}
