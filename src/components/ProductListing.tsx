import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      description
      variants {
        id
        name
        position
        sku
        price
      }
    }
   }
`;

type Variant = {
  id: string,
  name: string,
  position: string,
  price: string,
  sku: string
}


type Product = {
  id: string,
  name: string,
  description: string,
  variants: Array<Variant>
}

interface Data {
  products: Array<Product>;
};

export const ProductListing = <Query<Data, {}> query={ALL_PRODUCTS_QUERY}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data && data.products.map((product, index) => {
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={product.name}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">
              {product.description}
            </p>
            <ul>
            {product.variants.map((variant, index) => {
                return (
                  <li className="border-solid border-gray-200 border-b py-3" key={variant.name}>
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
