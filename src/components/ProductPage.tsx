import React from 'react';
import { Query } from 'react-apollo';
import { Product } from '../types/product';
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
            <div className="flex -mx-1 mt-6">
              <div className="w-4/6">
                <div className="flex">
                  <div className="w-2/6">
                    <div className="block bg-gray-200 h-64 w-full"></div>
                  </div>
                  <div className="w-4/6 px-6">
                    <h1>{data.product.name}</h1>

                    <div className="border-t border-b border-gray-300 border-solid py-3 my-3">
                      <p className="text-sm text-gray-800">
                        This item is available. Most customers receive this item within 7 business days.
                      </p>
                    </div>
                    <h2 className="my-4">Properties</h2>
                    <ul>
                      {data.product.productProperties.map((property, index) => {
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
                     <p className="my-4">{data.product.description}</p>
                   </div>
                  </div>
                  <hr className="product-hr" />
                  <div>
                    <h2>Variants</h2>
                    <div className="flex px-1 py-2">
                      {data.product.variants.map((variant, index) => {
                        return (
                          <div className="flex-1 max-w-sm rounded overflow-hidden shadow-lg" key={variant.id}>
                            <div className="px-6 py-4">
                              <div className="font-medium text-md mb-2">{variant.name}</div>
                              <p className="text-gray-700 text-base text-center">
                                ${variant.price}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
               </div>
              <div className="w-2/6">
                <div className="border border-solid border-gray-500 mx-6 p-3">
                  <div className="pb-1 px-1 border-b border-gray-200 text-xs antialiased">Sold and shipped by Acme Corp</div>
                  <div className="py-4 px-1 text-3xl antialiased">${data.product.variants[0].price}</div>
                  <div className="mt-2 flex">
                    <div className="w-1/2">
                      <a href="#" className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-block">Add to cart</a>
                    </div>
                    <div className="w-1/2">
                      <a href="#" className="text-sm bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded inline-block">Add to wishlist</a>
                    </div>
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
