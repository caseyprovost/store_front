import React from 'react'
import { ProductListing } from './ProductListing';

export const ProductsListingPage = () => {
  return (
    <div>
      <div className="py-3 border-solid border-gray-200 border-b w-full bg-gray-800 text-white px-2">
        <p>Displaying 1 of 1 results</p>
      </div>
      <div className="flex flex-wrap items-center -mx-1">
        {ProductListing}
      </div>
    </div>
  )
}
