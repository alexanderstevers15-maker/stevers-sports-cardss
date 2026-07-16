const cards = {

1: {
name: "Rookie Football Card",
sport: "Football",
player: "Star Quarterback",
condition: "PSA 10",
price: "$99.99",
description:
"Premium rookie football card for collectors."
},


2: {
name: "Baseball Rookie Card",
sport: "Baseball",
player: "Future MLB Star",
condition: "Raw",
price: "$49.99",
description:
"Modern baseball rookie card."
},


3: {
name: "Basketball Rookie Card",
sport: "Basketball",
player: "NBA Rising Star",
condition: "BGS 9.5",
price: "$199.99",
description:
"High quality basketball collectible."
}

};



export default function ProductPage({params}) {


const card = cards[params.id];


if(!card){

return (

<main>

<h1>
Card Not Found
</h1>

</main>

);

}



return (

<main className="product-page">


<div className="product-photo">

🃏

</div>



<div className="product-info">


<h1>
{card.name}
</h1>


<h2>
{card.price}
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


<p>
{card.description}
</p>


<button>
Add To Cart
</button>


</div>


</main>

);

}
