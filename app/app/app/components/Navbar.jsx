import Image from "next/image";


export default function Navbar(){

return (

<nav className="navbar">


<div className="brand">


<Image

src="/images/logo.png"

width={70}

height={70}

alt="Stevers Sports Cards Logo"

/>


<h1>
Stevers Sports Cards
</h1>


</div>



<div className="links">


<a href="/">
Home
</a>


<a href="/shop">
Shop
</a>


<a href="/about">
About
</a>


<a href="/contact">
Contact
</a>


<a href="/cart">
🛒 Cart
</a>


</div>


</nav>

);

}
