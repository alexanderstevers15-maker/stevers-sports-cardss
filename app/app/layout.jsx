import "./globals.css";


export const metadata = {

  title: "Stevers Sports Cards",

  description:
  "Buy, sell, and trade sports cards."

};


export default function RootLayout({children}) {

return (

<html lang="en">

<body>

{children}

</body>

</html>

);

}
