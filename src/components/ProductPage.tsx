import React from 'react';
import { Query } from 'react-apollo';
import { Variant } from '../types/variant';
import { VARIANT_QUERY } from '../queries/VariantQuery';

interface Data {
  variant: Variant;
};

interface ProductPageParams {
  id: string;
}

function formatMoney(value: string) {
  return new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(parseFloat(value))
}

class ProductPage extends React.Component<ProductPageParams> {
  render() {
    return (
      <Query query={VARIANT_QUERY} variables={{ id: this.props.id }}>
        {({ loading, data }: { loading:boolean, data:Data }) => {

          if (loading) return (<p>"Loading..."</p>);
          if (!data) return `Not able to load product`;

          return (
            <div className="flex -mx-1 mt-6">
              <div className="w-4/6">
                <div className="flex">
                  <div className="w-2/6">
                    <div className="block bg-gray-200 h-64 w-full"></div>
                  </div>
                  <div className="w-4/6 px-6">
                    <h1>{data.variant.name}</h1>

                    <div className="border-t border-b border-gray-300 border-solid py-3 my-3">
                      <p className="text-sm text-gray-800">
                        This item is available. Most customers receive this item within 7 business days.
                      </p>
                    </div>
                    <h2 className="my-4">Properties</h2>
                    <ul>
                      {data.variant.product.productProperties.map((property, index) => {
                        return (
                          <li key={index}>
                            <span className="inline-block font-medium text-sm w-24">{property.property.presentation}:</span>
                            <span className="text-sm">{property.value}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                 </div>
                 <hr className="product-hr" />
                 <div className="flex">
                   <div className="w-full px-1">
                     <h2>Details</h2>
                     <p className="my-4">{data.variant.description}</p>
                   </div>
                  </div>
                  <hr className="product-hr" />
                  <div>
                    <h2>Variants</h2>
                    <div className="flex px-1 py-2">

                    </div>
                  </div>
               </div>
              <div className="w-2/6">
                <div className="border border-solid border-gray-500 mx-6 p-3">
                  <div className="pb-1 px-1 border-b border-gray-200 text-xs antialiased">Sold and shipped by Acme Corp</div>
                  <div className="py-4 px-1 text-3xl antialiased sidebar-cart-price text-gray-600">{formatMoney(data.variant.price)}</div>
                  <div className="w-full pb-1 px-1">
                    <a href="#" className="text-sm text-center bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded button w-full">Add to cart</a>
                  </div>
                  <div className="w-full px-1">
                    <a href="#" className="text-sm text-center bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded button w-full">Add to wishlist</a>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    )
  }
 };

export default ProductPage;
