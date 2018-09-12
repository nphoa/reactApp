<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KeywordType extends Model
{
    protected $fillable = [
        'type','vietnamese', 'created_by', 'updated_by'
    ];
}
