<?php

namespace App\Http\Controllers\API;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
  
    public function index()
    {
        $category = \App\Category::latest()->get();

        return response()->json([
            'category' => $category
        ]);
    }

    public function store(Request $request)
    {
        $request -> validate([
            'name' => 'required'
        ]);
        \App\Category::create([
            'name'=>$request->name
        ]);
        return response()->json([
            'message'=> 'Data Submitted Successfully'
        ]);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
