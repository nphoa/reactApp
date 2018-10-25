<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $fillable = [
        'keyword','idType','vietnamese', 'created_by', 'updated_by',
    ];
}
