<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sidebar extends Model
{
    protected $table='sidebars';
    protected $fillable = [
        'name','icons','idUser',
    ];
}
