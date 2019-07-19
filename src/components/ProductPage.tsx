import React from 'react';
import { Query } from 'react-apollo';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { Product } from '../types/product';
import { Variant } from '../types/variant';
import { PRODUCT_QUERY } from '../queries/ProductQuery';

interface Data {
  product: Product;
};

interface ProductPageParams {
  id: string;
}

class ProductPage extends React.Component<ProductPageParams> {
  render() {
    return (
      <Query query={PRODUCT_QUERY} variables={{ id: this.props.id }}>
        {({ loading, data }: { loading:boolean, data:Data }) => {

          if (loading) return (<p>"Loading..."</p>);
          if (!data) return `Not able to load product`;

          return (
            <div className="flex flex-wrap items-center -mx-1">
              <h3>{data.product.name}</h3>
            </div>
          );
        }}
      </Query>
    )
  }
 };

export default ProductPage;
