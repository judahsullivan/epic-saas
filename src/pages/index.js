import * as React from 'react'
import Image from 'next/image'
import Hero from '../../public/assets/hero.png'
import Link from 'next/link'


export default function HomePage(){
  return(
    <div className="grid-halves">
      <div className=' bg-teal border-right'>
       <div className='column-padding'>
          <div className='tablet-centered'>
            <div className='content-grid home-hero'>
              <h1> 
                The Most <br/> Epic Products
              </h1>
              <p className='section-subtitle'>
                All the most epic producted in one place!
              </p>
              <Link href={'/products'} className='large-button'>
                <div className='large-button-text'>
                  Lets Explore
                </div>
              </Link>
              
            </div>
          </div>
        </div> 

      </div> 
      <div className="bg-salmon">
        <div className="column-padding centered ">
          <div className="callout-wrap">
            <Image 
              src={Hero} 
              placeholder='blur' 
              alt="Hero "
              className='callout-image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
