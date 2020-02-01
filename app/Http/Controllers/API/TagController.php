<?php

namespace App\Http\Controllers\API;

use App\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagController extends Controller
{
    
    public function index()
    {
        $tag = \App\Tag::latest()->get();

        return response()->json([
            'tag' => $tag
        ]);
    }

    public function store(Request $request)
    {
        $request -> validate([
            'name' => 'required'
        ]);
        \App\Tag::create([
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
