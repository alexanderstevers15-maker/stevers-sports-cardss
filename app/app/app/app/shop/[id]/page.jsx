"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function Shop() {


const [cards,setCards] = useState([]);



useEffect(() => {

getCards();

},[]);



async function getCards(){


const {data,error} = await supabase
.from("cards")
.select("*");



if(error){

console.log(error);

}

else{

setCards(data);

}


}



return (

<main className="shop">


<h1>
Shop Sports Cards
</h1>


<p>
Football • Baseball • Basketball
</p>



<div className="product-grid">


{cards.map((card)=>(


<div

className="product-card"

key={card.id}

>


<div className="card-image">

🃏

</div>



<h2>
{card.name}
</h2>



<p>
Sport: {card.sport}
</p>


<p>
Player: {card.player}
</p>


<p>
Condition: {card.condition}
</p>


<h3>
{card.price}
</h3>


<a href={`/shop/${card.id}`}>

View Card

</a>


</div>


))}



</div>


</main>

);

}
