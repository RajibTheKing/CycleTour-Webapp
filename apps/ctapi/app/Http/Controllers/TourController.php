<?php

namespace App\Http\Controllers;

use App\Tour;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TourController extends Controller
{

    public function showAllTours(){

        return response()->json([
            'tours' => Tour::all(),
            'message' => 'Success'
        ], 200);
    }

    public function showTourById($id){
        return response()->json([
            'tour' => Tour::find($id),
            'message' => 'Success'
        ], 200);
    }

    public function showSpotsByTourId($id){

        $spots = DB::table('tour_spots')
                    ->join('places', 'places.id', '=', 'tour_spots.place_id')
                    ->select(DB::raw('tour_spots.*, places.*'))
                    ->where('tour_spots.tour_id', '=', $id)
                    ->first();

        return response()->json([
            'spots' => Tour::find($id),
            'message' => 'Success'
        ], 200);
    }
}
