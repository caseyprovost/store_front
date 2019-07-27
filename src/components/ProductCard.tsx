import React from 'react';
import { Link } from 'react-router-dom';
import { Variant } from '../types/variant';

interface Props {
  variant: Variant
}

function formatMoney(value: string) {
  return new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(parseFloat(value))
}

export const ProductCard = ({variant}: Props) => {
  return (
    <div className="rounded shadow-md w-full flex my-1 px-1 py-4 h-48" key={variant.id}>
      <div className="w-1/4">
        <div className="p-4 w-2/3 h-40 bg-gray-200 m-auto mb-2">
       </div>
      </div>
      <div className="px-4 w-3/4">
        <div className="font-bold text-xl mb-2 product-card-title">
          <Link to={{ pathname: `/products/${variant.id}` }} className="text-indigo-700 hover:underline">
            {variant.name}
          </Link>
        </div>
        <p className="text-gray-700 text-base">
          {variant.description}
        </p>
        <p className="text-gray-700 text-xl mt-4 product-card-price">
          {formatMoney(variant.price)}
        </p>
      </div>
    </div>
  )
}
