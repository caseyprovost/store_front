import React from 'react';
import { Query } from 'react-apollo';
import { Variant } from '../types/variant';
import { VARIANT_QUERY } from '../queries/VariantQuery';
import { Link } from 'react-router-dom';

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

function sortVariants(a: Variant, b: Variant) {
  if (a.position < b.position)
     return -1;
  if (a.position > b.position)
    return 1;
  return 0;
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
                    <h1>{data.variant.product.name} - {data.variant.name}</h1>

                    <div className="border-t border-b border-gray-300 border-solid py-3 my-3">
                      <p className="text-sm text-gray-800">
                        This item is available. Most customers receive this item within 7 business days.
                      </p>
                    </div>

                    <div className="flex w-full -mx-2">
                      {data.variant.product.variants.sort(sortVariants).map((variant, index) => {
                        if (variant.id != data.variant.id) {
                          return (
                            <Link to={{ pathname: `/products/${variant.id}` }} key={variant.id} className="w-1/3 px-1">
                              <div className="bg-gray-100 w-full rounded py-2 px-4 border border-gray-200 hover:bg-gray-600 hover:text-gray-100 hover:border-gray-700 font-semibold text-gray-700">
                                <p className="text-xs" data-id={variant.id}>{variant.name}</p>
                                <p className="text-xs">{formatMoney(variant.price)}</p>
                              </div>
                            </Link>
                          )
                         }
                      })}
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
                     <h2>Product description</h2>
                     <p className="my-4">{data.variant.description}</p>
                   </div>
                  </div>
                  <hr className="product-hr" />
                  <div>
                    <h2>Frequently Bought Together</h2>
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
