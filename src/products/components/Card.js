import Link from "next/link";

export default function ProductCard({product}) {
  return(
  <article className='product-card'>
      <Link href={`/products/${product.slug}`}>
        <img  alt={product.name} src={`/assets/${product.slug}.png`} placeholder="blur"/>
      </Link>
      <header>
        <h4>{product.name}</h4>
      </header>
      <footer>
      <Link href={`/products/${product.slug}`} className="more">
        See More ➡️ 
        </Link>
        <div>
          <span className="pill">{product.category}</span>
        </div>
      </footer>
  </article>

 )
}
