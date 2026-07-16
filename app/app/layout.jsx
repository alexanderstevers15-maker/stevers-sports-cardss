import "./globals.css";

import Navbar from "@/components/Navbar";

import {CartProvider} from "@/context/CartContext";



export const metadata = {

title:"Stevers Sports Cards",

description:
"Buy, sell, and trade sports cards."

};



export default function RootLayout({children}) {


return (

<html lang="en">

<body>


<CartProvider>

<Navbar />

{children}

</CartProvider>


</body>

</html>

);

}
