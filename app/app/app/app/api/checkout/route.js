import { NextResponse } from "next/server";


export async function POST(request) {


const {cart} = await request.json();



const total = cart.reduce(

(sum,item)=>

sum + Number(
item.price.replace("$","")
),

0

);



return NextResponse.json({

checkoutUrl:
"#",

total

});


}
