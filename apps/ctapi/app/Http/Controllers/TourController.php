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
            'tours' => Tour::orderBy('id','ASC')->get(),
            'message' => 'Success'
        ], 200);
    }

    public function showTourById($id){
        return response()->json([
            'tour' => Tour::find($id),
            'message' => 'Success'
        ], 200);
    }

    public function showPopularTours(){
        return response()->json([
            'tours' => Tour::offset(0)->limit(3)->orderBy('id','ASC')->get(),
            'message' => 'Success'
        ], 200);
    }

    public function showSpotsByTourId($id){

        $spots = DB::table('tour_spots')
                    ->join('places', 'places.id', '=', 'tour_spots.place_id')
                    ->select(DB::raw('tour_spots.*, places.*'))
                    ->where('tour_spots.tour_id', '=', $id)
                    ->orderBy('tour_spots.id','ASC')
                    ->get();

        return response()->json([
            'spots' => $spots,
            'tour' => Tour::find($id),
            'message' => 'Success'
        ], 200);
    }
}
