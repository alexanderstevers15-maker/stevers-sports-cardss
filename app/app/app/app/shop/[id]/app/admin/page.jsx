"use client";

import {useState} from "react";


export default function Admin(){


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

[e.target.name]:e.target.value

});

}



function addCard(){

console.log(card);

alert("Card Added!");

}



return (

<main className="admin">


<h1>
Stevers Sports Cards Admin
</h1>



<div className="admin-box">


<input

name="name"

placeholder="Card Name"

onChange={updateCard}

/>



<input

name="sport"

placeholder="Sport"

onChange={updateCard}

/>



<input

name="player"

placeholder="Player Name"

onChange={updateCard}

/>



<input

name="condition"

placeholder="Condition (PSA 10, Raw)"

onChange={updateCard}

/>



<input

name="price"

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
