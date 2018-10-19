<?php

namespace App\Repositories;

use App\Models\Sidebar;
interface SidebarRepositoryInterface {
    /**
     * @param Sidebar Sidebar
     * @return mixed
     */
    public function save(Sidebar $sidebar);

    /**
     * @param null
     * @return mixed
     */
    public function getAll();
}
