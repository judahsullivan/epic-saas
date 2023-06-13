import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Meta from "../components/Meta";

export default function AppLayout({children}) { 
  return(
    <Fragment> 
    <Meta />
    <Navbar />
    {children}


    </Fragment> 
  )

}

