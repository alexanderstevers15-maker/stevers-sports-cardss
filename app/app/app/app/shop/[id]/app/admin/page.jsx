"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";


export default function Admin() {


const [card,setCard] = useState({

name:"",
sport:"",
player:"",
condition:"",
price:""

});



function updateCard(e){

setCard({

...card,

[e.target.name]: e.target.value

});

}



async function addCard(){


const {error} = await supabase
.from("cards")
.insert([card]);



if(error){

alert("Error adding card");

console.log(error);

}

else{

alert("Card Added!");

setCard({

name:"",
sport:"",
player:"",
condition:"",
price:""

});

}


}



return (

<main className="admin">


<h1>
Stevers Sports Cards Admin
</h1>



<div className="admin-box">


<input

name="name"

value={card.name}

placeholder="Card Name"

onChange={updateCard}

/>



<input

name="sport"

value={card.sport}

placeholder="Football, Baseball, Basketball"

onChange={updateCard}

/>



<input

name="player"

value={card.player}

placeholder="Player Name"

onChange={updateCard}

/>



<input

name="condition"

value={card.condition}

placeholder="PSA 10, Raw, BGS"

onChange={updateCard}

/>



<input

name="price"

value={card.price}

placeholder="Price"

onChange={updateCard}

/>



<button

onClick={addCard}

>

Add Card

</button>



</div>


</main>

);

}
