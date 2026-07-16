import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {

  title: "Stevers Sports Cards",

  description:
  "Buy, sell, and trade sports cards."

};


export default function RootLayout({children}) {

return (

<html lang="en">

<body>

<Navbar />

{children}

</body>

</html>

);

}
