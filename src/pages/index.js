import Link from "next/link"
import Image from "next/image"
import Hero from '../../public/assets/hero.png'

export default function HomePage() {
  return(
    <div className="grid-halves h-screen-navbar">
    <div class="bg-teal border-right">
    <div class="column-padding">
    <div class="tablet-center">
    <div class="content-grid home-hero">
    <h1>
    The Most <br /> epic products
    </h1>
    <p class="section-subtitle">
    All the Most epic products you will find on the internet all in one place!
    </p>
    <Link class="large-button" href="/products" >
    <div class="large-button-text">Explore Our Products</div>
    </Link>
    </div>
    </div>
    </div>
    </div>
    <div class="bg-salmon">
    <div class="column-padding centered">
    <div class="callout-wrap">
    <Image src={Hero} alt="Hero Image" className="callout-image"/>
    </div>
    </div>
    </div>
    </div>
  )
}
