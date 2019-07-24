import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Variant } from '../types/variant';
import { ProductCard } from './ProductCard';
import { ALL_PRODUCTS_QUERY } from '../queries/AllProductsQuery'

interface Data {
  variants: Array<Variant>;
};

export const ProductListing = <Query<Data, {}> query={ALL_PRODUCTS_QUERY}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data && data.variants.map((variant, index) => {
      return (<ProductCard variant={variant} />)
    });
  }}
</Query>
