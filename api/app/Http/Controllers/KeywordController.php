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
}
