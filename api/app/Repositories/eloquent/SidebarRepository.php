<?php
namespace App\Repositories\eloquent;
use App\Repositories\SidebarRepositoryInterface;
use App\Models\Sidebar;
class SidebarRepository implements SidebarRepositoryInterface{
    public function getAll()
    {
        return Sidebar::all();
    }
    public function save(Sidebar $sidebar)
    {
         return $sidebar->save();
    }
}
