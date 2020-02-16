<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Spoiler;

class SpoilerController extends BaseCRUDController
{
    protected $model_class = Spoiler::class;
    protected $validation_rules = [
        "description"=> 'required|min:3',
        "titre"=> 'required|min:3',
        "titre_original"=> 'required|min:3',
        "id_themoviedb"=> 'required|integer|min:3',
        "valid"=> 'required|integer|min:1',
    ];
}
