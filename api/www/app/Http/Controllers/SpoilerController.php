<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpoilerController extends BaseCRUDController
{
    protected $model_class = Client::class;
    protected $validation_rules = [
        'name' => 'required|min:3',
        'email' => 'required|email|min:6',
    ];
}
