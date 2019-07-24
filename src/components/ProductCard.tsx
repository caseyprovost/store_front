import React from 'react';
import { Link } from 'react-router-dom';
import { Variant } from '../types/variant';

interface Props {
  variant: Variant
}

export const ProductCard = ({variant}: Props) => {
  return (
    <div className="rounded shadow-md w-1/3 my-1 px-1 py-4 h-64" key={variant.id}>
      <div className="px-4 w-full">
        <div className="font-bold text-xl mb-2">
          <Link to={{ pathname: `/products/${variant.product.id}` }} className="text-indigo-700 hover:underline">
            {variant.product.name}
          </Link>
        </div>
        <p className="text-gray-700 text-base">
          {variant.product.description}
        </p>
        <ul>
          {variant.product.optionTypes.map((optionType, index) => {
            return (
              <li className="border-solid border-gray-200 border-b py-3" key={optionType.name}>
                <h4 className="inline-block text-sm">{optionType.name}</h4>
                <span className="float-right">TBD</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
