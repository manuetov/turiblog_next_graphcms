import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// const categories = [ {name: 'React', slug: 'react' }, { name: 'web development', slug: 'web-dev'} ]
import { getCategories } from '../services'

const Header = () => {
   const [categories, setCategories] = useState([])

   useEffect (() => {
      getCategories().then((newCategories) => setCategories(newCategories))
   }, [])

  return (
     <div className="container mx-auto px-2 mb-10 sticky shadow-inner top-0 z-10">
        <div className="border-8 px-3 rounded-3xl  relative shadow-2xl scroll-smooth bg-white border-y-green-500 shadow-cyan-500/50 w-full inline-block py-2">
           <div className="md:float-left block">
              <Link href='/'>
                  <span className='cursor-pointer font-bold text-2xl hover:text-green-600 transition duration-500 '>
                     Andalucía Turismo
                  </span>
              </Link>
           </div>
           <div className="hidden md:float-letf md:contents">
               {categories.map((category) => (
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                     <span className="md:float-right mt-2 align-middle text-black hover:text-green-600 ml-4 font-semibold cursor-pointer">
                        {category.name}
                     </span>
                  </Link>
               ))}
           </div>
        </div>
     </div>
  )
}

export default Header
