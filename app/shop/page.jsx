const cards = [
  {
    id: 1,
    name: "Rookie Football Card",
    sport: "Football",
    player: "Star Quarterback",
    condition: "PSA 10",
    price: "$99.99"
  },

  {
    id: 2,
    name: "Baseball Rookie Card",
    sport: "Baseball",
    player: "Future MLB Star",
    condition: "Raw",
    price: "$49.99"
  },

  {
    id: 3,
    name: "Basketball Rookie Card",
    sport: "Basketball",
    player: "NBA Rising Star",
    condition: "BGS 9.5",
    price: "$199.99"
  }
];


export default function Shop() {

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
