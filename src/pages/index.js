import Link from "next/link"
import Image from "next/image"
import Hero from '../../public/assets/hero.png'

export default function HomePage() {
  return(
    <div className="grid-halves h-screen-navbar">
    <div className="bg-teal border-right">
    <div className="column-padding">
    <div className="tablet-center">
    <div className="content-grid home-hero">
    <h1>
    The Most <br /> epic products
    </h1>
    <p className="section-subtitle">
    All the Most epic products you will find on the internet all in one place!
    </p>
    <Link className="large-button" href="/products" >
    <div className="large-button-text">Explore Our Products</div>
    </Link>
    </div>
    </div>
    </div>
    </div>
    <div classNames="bg-salmon">
    <div className="column-padding centered">
    <div className="callout-wrap">
    <Image src={Hero} alt="Hero Image" className="callout-image"/>
    </div>
    </div>
    </div>
    </div>
  )
}
