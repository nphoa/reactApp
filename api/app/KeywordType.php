<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KeywordType extends Model
{
    protected $fillable = [
        'idKeyword', 'created_by', 'updated_by','type','vietnamese'
    ];
}
