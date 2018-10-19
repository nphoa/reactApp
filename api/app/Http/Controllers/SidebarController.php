<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use App\Repositories\SidebarRepositoryInterface;
use App\Models\Sidebar;
use Illuminate\Support\Facades\Auth;

class SidebarController extends Controller
{
    protected $sidebarRepositoryInterface;
    public function __construct(SidebarRepositoryInterface $sidebarRepositoryInterface)
    {
        $this->sidebarRepositoryInterface = $sidebarRepositoryInterface;
    }

    public function save(Request $req){
        $sideBar = new Sidebar();
        $sideBar->name = $req->get('name');
        $sideBar->icons = $req->get('icons');
        $sideBar->url = $req->get('url');
        $sideBar->idUser = Auth::user()->id;
        $sideBar->created_by = Auth::user()->id;
        $sideBar->updated_by = Auth::user()->id;
        $sideBar = $this->sidebarRepositoryInterface->save($sideBar);
        return response()->json([
           'status' => 200,
            'data'  => $sideBar
        ]);
    }

    public function getAll(){
        $sideBars = $this->sidebarRepositoryInterface->getAll();
        return response()->json([
            'status' => 200,
            'data'  => $sideBars
        ]);
    }
}
