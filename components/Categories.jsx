import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
   const [categories, setCategories] = useState([])

   useEffect (() => {
      getCategories().then((newCategories) => setCategories(newCategories))
   }, [])

  return (
    <div className="mb-8 p-8 pb-12 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="pb-4 mb-8 border-b text-xl font-semibold">
         Categorías</h3>
         {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
               <span className="cursor-pointer block pb-3 mb-3">
                  {category.name}
               </span>
            </Link>
         ))}
    </div>
  )
}

export default Categories