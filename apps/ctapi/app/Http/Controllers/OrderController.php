<?php

namespace App\Http\Controllers;

use App\Order;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{

    public function search(){
        // return json_encode(array('name'=>'nayem','email'=>'majhar'));
        return response()->json(Order::all());
    }

    public function showOrderById($id){
        return response()->json(Order::find($id));
    }

    public function createOrder(Request $request)
    {

         $request->dropoff_time;
        $bike_id    = $request->bike_id;

        $user = \App\User::where('id', $request->user_id)->where('auth_token', $request->auth_token)->get()->first();
        if(!$user){
            return response(
                [
                    'order'   => 9,
                    'status'  => "success",
                ],
                200
            );
        }

        $startDate  = $request->pickup_time;
        $endDate    = $request->dropoff_time;
        $bike_id    = $request->bike_id;
        $bikeIsAvailable = DB::select(DB::raw('SELECT order_items.* FROM order_items WHERE bike_id = '.$bike_id.' AND (pickup_time between \''.$startDate.'\' AND \''.$endDate.'\') AND (dropoff_time between \''.$startDate.'\' AND \''.$endDate.'\')'));

        if(count($bikeIsAvailable)){
            return response(
                [
                    'order'   => -1,
                    'status'  => "success",
                ],
                200
            );
        }

        $bike = DB::table('bikes')
                    ->select(DB::raw('bikes.*'))
                    ->where('bikes.id', '=', $bike_id)
                    ->first();

        $address_pick_drop = $bike->address .','. $bike->zip .' '. $bike->city;
        $data = [
            'buyer_user_id'     => $request->user_id,
            'bike_id'           => $request->bike_id,
            'pickup_time'       => $request->pickup_time,
            'dropoff_time'      => $request->dropoff_time,
            'address_pick_drop' => $address_pick_drop,
            'rent_total'        => $request->rent_total,
            'payment_methods'   => $request->payment_methods
        ];

        $order = Order::create($data);

        $statusCode = $order ? 220:422;

        return response(
            [
                'details'   => $order,
                'order' => 1,
                'status' => $order ? "success":"error"
            ],
            $statusCode
        );

    }
}
