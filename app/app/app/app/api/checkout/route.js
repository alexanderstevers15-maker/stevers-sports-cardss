import { NextResponse } from "next/server";


export async function POST(request) {


const body = await request.json();


const cart = body.cart;



// Square checkout will be connected here


return NextResponse.json({

message:
"Checkout started",

cart

});


}
