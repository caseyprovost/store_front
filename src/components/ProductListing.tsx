import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { ALL_PRODUCTS_QUERY } from '../queries/AllProductsQuery'

interface Data {
  products: Array<Product>;
};

export const ProductListing = <Query<Data, {}> query={ALL_PRODUCTS_QUERY}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data && data.products.map((product, index) => {
      return (
        <div className="rounded shadow-md w-1/3 my-1 px-1 py-4 h-64" key={product.id}>
          <div className="px-4 w-full">
            <div className="font-bold text-xl mb-2">
              <Link to={{ pathname: `/products/${product.id}` }} className="text-indigo-700 hover:underline">
                {product.name}
              </Link>
            </div>
            <p className="text-gray-700 text-base">
              {product.description}
            </p>
            <ul>
            {product.variants.map((variant, index) => {
                return (
                  <li className="border-solid border-gray-200 border-b py-3" key={variant.id}>
                    <h4 className="inline-block text-sm">{variant.name}</h4>
                    <span className="float-right">${variant.price}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    });
  }}
</Query>
