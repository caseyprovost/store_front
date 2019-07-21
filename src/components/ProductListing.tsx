import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { ALL_PRODUCTS_QUERY } from '../queries/AllProductsQuery'

interface Data {
  products: Array<Product>;
};

export const ProductListing = <Query<Data, {}> query={ALL_PRODUCTS_QUERY}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data && data.products.map((product, index) => {
      return (<ProductCard product={product} />)
    });
  }}
</Query>
