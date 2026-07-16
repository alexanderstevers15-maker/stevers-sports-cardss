"use client";


import {useCart} from "@/context/CartContext";



export default function Cart(){


const {cart,removeFromCart}=useCart();



return (

<main className="cart-page">


<h1>
Your Cart
</h1>



{
cart.length === 0 ?


<p>
Your cart is empty.
</p>


:


cart.map((item,index)=>(


<div 
className="cart-item"
key={index}
>


<h2>
{item.name}
</h2>


<p>
{item.price}
</p>


<button

onClick={() =>
removeFromCart(item.id)
}

>

Remove

</button>


</div>


))


}



<button

className="checkout"

onClick={async()=>{


const response =
await fetch("/api/checkout",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

cart

})

});


const data =
await response.json();


alert(data.message);


}}

>

Checkout

</button>


</main>

);

}
