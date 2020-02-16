<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

abstract class BaseCRUDController extends Controller
{
    protected $model_class;
    //exemple de validation
    protected $validation_rules = [
        /*
        'name' => 'required|min:3',
        'client_id' => 'required|min:6',
        */
    ];

    public function index(Request $request)
    {
        return response()->json( call_user_func($this->model_class."::all"), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), $this->validation_rules);

        if ($validator->fails()) {
            return response()->json([
                'errors'  => $validator->errors()
            ], 422);
        }

        $org = call_user_func($this->model_class."::create",$request->all());

        return response()->json($org, 201);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), $this->validation_rules);

        if ($validator->fails()) {
            return response()->json([
                'errors'  => $validator->errors()
            ], 422);
        }

        $org = call_user_func($this->model_class."::create",$request->all());

        return response()->json($org, 201);
    }

    public function show($instance_id, Request $request)
    {
        $instance = call_user_func($this->model_class."::findOrFail",$instance_id);
        return response()->json($instance, 200);
    }

    public function update($instance_id, Request $request)
    {
        $data = $request->all();
        $instance = call_user_func($this->model_class."::findOrFail",$instance_id);

        $instance->fill($data);
        $instance->save();

        return response()->json($instance, 200);
    }

    public function destroy($instance_id, Request $request)
    {
        $instance = call_user_func($this->model_class."::findOrFail",$instance_id);
        $delete = $instance->delete();

        return response()->json($delete, 200);
    }
}
