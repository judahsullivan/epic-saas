import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return(
  <div className="nav-container border-b-2 border-black">
      <Link href={'/'} >
        <Logo />
      </Link>
      <div className="nav-menu">
        <Link href={'/login'} className="nav-link white">
        <div>
            Login
          </div>
        </Link>
        <Link href={'/products'} className="nav-link black">
          <div>
            Pricing
          </div>
        </Link>
      </div>
  </div>
  )
 }
